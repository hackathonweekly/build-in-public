import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://hackathonweekly.com',
      images: '/images/logo.png',
      siteName: 'HackathonWeekly',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@HackathonWeekly',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/images/logo.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL('https://hackathonweekly.com');
