import Link from 'next/link';
import { cn } from '@/lib/utils';

const LOGO_SIZES = {
  nav: {
    wrap: 'gap-3 sm:gap-3.5',
    wordmark: 'text-[1.9rem] sm:text-[2.35rem]',
    divider: 'h-9 sm:h-11',
    tagline: 'text-[1.05rem] sm:text-[1.25rem]',
  },
  lg: {
    wrap: 'gap-3.5 sm:gap-4',
    wordmark: 'text-[2.4rem] sm:text-[2.85rem]',
    divider: 'h-11 sm:h-12',
    tagline: 'text-[1.25rem] sm:text-[1.5rem]',
  },
} as const;

type LogoProps = {
  variant?: 'light' | 'dark';
  size?: keyof typeof LOGO_SIZES;
  className?: string;
  asLink?: boolean;
};

export default function Logo({
  variant = 'light',
  size = 'nav',
  className,
  asLink = true,
}: LogoProps) {
  const sizing = LOGO_SIZES[size];
  const content = (
    <span
      className={cn(
        'inline-flex items-center whitespace-nowrap py-0.5 leading-none select-none',
        sizing.wrap,
        className,
      )}
    >
      <span
        className={cn(
          'font-serif tracking-tight font-bold',
          sizing.wordmark,
          variant === 'light' ? 'text-white' : 'text-foreground',
        )}
      >
        Arabella
      </span>
      <span
        className={cn('w-px shrink-0 bg-gold', sizing.divider)}
        aria-hidden="true"
      />
      <span className={cn('font-serif text-gold font-bold', sizing.tagline)}>
        Banquet Hall
      </span>
    </span>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link href="/" className="shrink-0" aria-label="Arabella Banquet Hall">
      {content}
    </Link>
  );
}
