import { Hero } from '@/components/Hero/Hero';
import { Work } from '@/components/Work/Work';
import { FAQ } from '@/components/FAQ/FAQ';
import { Testimonial } from '@/components/Testimonial/Testimonial';
import { baseUrl, createMetadata } from "@/utils/metadata";
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/app/i18n';

export const metadata = createMetadata({
  title: 'Build In Public - 21天独立开发者挑战',
  description: '周周黑客松举办的Build In Public活动，帮助独立开发者从0到1实现最小可行产品MVP，并找到前100个用户。',
  metadataBase: baseUrl,
});

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  // Wait for params to resolve before using its properties
  const resolvedParams = await params;
  
  // Enable static rendering
  setRequestLocale(resolvedParams.lang);
  
  return (
    <>
      <Hero />
      <Work />
      <FAQ />
      {/* <Testimonial /> */}
    </>
  );
}

