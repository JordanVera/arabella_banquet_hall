import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Portfolio | ${COMPANY.name}`,
  description:
    'Browse weddings, quinceañeras, and private celebrations hosted at Arabella Banquet Hall in Houston, TX.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/portfolio/events/01.jpg"
          alt="Celebrations hosted at Arabella Banquet Hall"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[var(--gold)] uppercase">
            Our Work
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Portfolio
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="leading-relaxed text-foreground/60">
            A look at weddings, receptions, and private celebrations hosted at
            our Houston banquet hall. Follow{' '}
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] hover:underline"
            >
              {COMPANY.instagramHandle}
            </a>{' '}
            for our latest work.
          </p>
        </div>

        <PortfolioGrid />

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex bg-[var(--gold)] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[var(--gold-hover)]"
          >
            Plan Your Event
          </Link>
        </div>
      </section>
    </>
  );
}
