// import { source } from '@/lib/source';;
import type { HomeLayout } from '@/utils/types';
import { getTranslations } from 'next-intl/server';
import { LayoutConfig } from '@/utils/types';

// 此文件保留用于引用，但实际功能已移至组件中
// 推荐使用 components/Providers/NavigationProvider.tsx 和相关组件

// 空配置，不再使用
export const baseOptions: HomeLayout = {
  githubUrl: '',
  i18n: true,
  nav: {
    transparentMode: 'top'
  },
  links: [],
  blog_nav: [],
  social: [],
  faqs: []
};

export async function generateConfig({
  params,
}: {
  params: { lang: string };
}): Promise<LayoutConfig> {
  const t = await getTranslations({ locale: params.lang, namespace: 'Navigation' });

  return {
    siteTitle: 'HackathonWeekly',
    navigationLinks: [
      { href: '/', label: t('home') },
      { href: '/docs', label: t('documentation') },
      // { href: '/blog', label: t('blog') },
      // { href: '/docs/changelog', label: t('changelog') },
    ],
  };
}
