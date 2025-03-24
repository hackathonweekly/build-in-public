'use client';

import { Link } from '@/app/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ExternalLink } from '@/components/Links/ExternalLink';

export function Hero() {
  const t = useTranslations('Hero');
  
  return (
    <header className="mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-20">
        <h1 className="mb-6 text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
          {t('title')}
        </h1>
        <div className="flex items-center mt-5">
          <Link
            href="/docs"
            className="mr-6 rounded-md text-fd-primary-foreground bg-fd-primary border border-solid border-black px-6 py-2 font-semibold lg:mr-8"
          >
            {t('getStarted')}
          </Link>
          <ExternalLink
            href="https://github.com/frontendweb3/Nextify"
            className="flex items-center justify-center rounded-md border border-solid bg-fd-second text-fd-primary px-6 py-2 font-bold"
          >
            {t('github')}
          </ExternalLink>
        </div>
      </div>
    </header>
  )
}
