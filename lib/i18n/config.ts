// i18n routing configuration for Next.js 14 with next-intl
import { notFound } from 'next/navigation';

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

// Helper function to get the default locale
export const getDefaultLocale = (): Locale => 'tr';
