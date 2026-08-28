import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
  asLink?: boolean;
};

export default function Logo({
  variant = 'light',
  className,
  asLink = true,
}: LogoProps) {
  const content = (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 sm:gap-3 leading-none select-none',
        className,
      )}
    >
      <span
        className={cn(
          'font-serif text-[1.5rem] sm:text-[1.75rem] tracking-tight',
          variant === 'light' ? 'text-white' : 'text-foreground',
        )}
      >
        Arabella
      </span>
      <span className="h-7 w-px shrink-0 bg-gold sm:h-8" aria-hidden="true" />
      <span className="font-serif text-[0.72rem] sm:text-[0.8rem] tracking-[0.04em] text-gold">
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
