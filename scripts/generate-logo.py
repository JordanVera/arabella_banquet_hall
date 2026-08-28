#!/usr/bin/env python3
"""Generate Arabella Banquet Hall logo PNGs using Emylis.otf."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT_PATH = ROOT / "src/app/fonts/Emylis.otf"
PUBLIC = ROOT / "public"

PRIMARY = (245, 154, 136, 255)  # #f59a88
WHITE = (255, 255, 255, 255)
CHARCOAL = (30, 28, 24, 255)


def load_font(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_PATH), size)


def text_size(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=font)
    return box[2] - box[0], box[3] - box[1]


def render_logo(
    *,
    main_color: tuple[int, int, int, int],
    sub_color: tuple[int, int, int, int],
    accent_color: tuple[int, int, int, int],
    filename: str,
) -> None:
    main_font = load_font(72)
    sub_font = load_font(24)

    probe = Image.new("RGBA", (1, 1), (0, 0, 0, 0))
    probe_draw = ImageDraw.Draw(probe)

    main_text = "Arabella"
    sub_text = "Banquet Hall"

    main_w, main_h = text_size(probe_draw, main_text, main_font)
    sub_w, sub_h = text_size(probe_draw, sub_text, sub_font)

    pad_x, pad_y = 20, 16
    gap = 16
    accent_w = 2
    accent_h = max(main_h, sub_h) - 8

    width = pad_x + main_w + gap + accent_w + gap + sub_w + pad_x
    height = max(main_h, sub_h) + pad_y * 2

    image = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    main_x = pad_x
    main_y = (height - main_h) // 2
    draw.text((main_x, main_y), main_text, font=main_font, fill=main_color)

    accent_x = main_x + main_w + gap
    accent_y = (height - accent_h) // 2
    draw.rectangle(
        (accent_x, accent_y, accent_x + accent_w, accent_y + accent_h),
        fill=accent_color,
    )

    sub_x = accent_x + accent_w + gap
    sub_y = (height - sub_h) // 2
    draw.text((sub_x, sub_y), sub_text, font=sub_font, fill=sub_color)

    output = PUBLIC / filename
    image.save(output, "PNG")
    print(f"Wrote {output} ({width}x{height})")


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)

    render_logo(
        main_color=WHITE,
        sub_color=PRIMARY,
        accent_color=PRIMARY,
        filename="logo-light.png",
    )
    render_logo(
        main_color=CHARCOAL,
        sub_color=PRIMARY,
        accent_color=PRIMARY,
        filename="logo-dark.png",
    )


if __name__ == "__main__":
    main()
