'use client';

import { Logo } from '@/components/Logo/Logo';
import { Newsletter } from "@/components/Newsletter/Newsletter"
import { useTranslations } from 'next-intl';
import { Github, Facebook, Globe } from 'lucide-react';
import { ExternalLink } from '@/components/Links/ExternalLink';

export function Footer() {
  const t = useTranslations('Footer');
  const socialData = t.raw('social') as Array<{
    name: string;
    url: string;
  }>;

  // Map social icons based on name
  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Github':
        return <Github />;
      case 'Facebook':
        return <Facebook />;
      case 'Website':
        return <Globe />;
      default:
        return <Globe />;
    }
  };

  return (
    <footer className="block">

      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">

        <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10 mb-10 xl:mb-0">
            <div className="flex flex-col items-start gap-6">
              <Logo />
              <p>
                {t('description')}
              </p>
            </div>
            <div className="mt-12 grid w-full max-w-52 grid-flow-col grid-cols-3 mx-auto gap-3 mb-8 md:mb-0">
              {
                socialData?.map(link => (
                  <ExternalLink
                    key={link.name}
                    href={link.url}
                    className="mx-auto flex max-w-6 flex-col items-center justify-center text-fd-foreground"
                  >
                    {getSocialIcon(link.name)}
                  </ExternalLink>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">{t('solution.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('solution.marketing')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('solution.analytics')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('solution.commerce')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('solution.insights')}
            </ExternalLink>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">{t('support.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('support.pricing')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('support.documentation')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('support.guides')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('support.apiStatus')}
            </ExternalLink>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">{t('docs.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('docs.pricing')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('docs.apiGuide')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('docs.apiStatus')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('docs.devGuide')}
            </ExternalLink>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-4">
              <p className="font-bold uppercase">{t('company.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('company.about')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('company.blog')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('company.jobs')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('company.press')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition hover:text-blue-600"
            >
              {t('company.partners')}
            </ExternalLink>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-border" />
        <Newsletter />
        {/* Divider */}
        <div className="mb-14 mt-16 w-full border-b border-border" />
        <div className="flex gap-12 justify-between flex-col md:flex-row md:items-center">
          <p className="text-sm text-center sm:text-base">
            {t('copyright')}
          </p>
          <div className="text-center font-semibold">
            <ExternalLink
              href="#"
              className="py-2 font-normal transition hover:text-blue-600 px-2.5"
            >
              {t('terms')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 font-normal transition hover:text-blue-600 px-2.5"
            >
              {t('license')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 font-normal transition hover:text-blue-600 px-2.5"
            >
              {t('privacy')}
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

