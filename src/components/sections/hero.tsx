"use client";

import Link from 'next/link';

export default function Hero({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}) {
  return (
    <section className="hero">
      <div className="container mx-auto text-center py-12">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-4">{subtitle}</p>
        <Link href="/quote">
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        </Link>
      </div>
    </section>
  );
}
