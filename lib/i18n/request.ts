import { getRequestConfig } from 'next-intl/server';
import enMessages from '@/messages/en.json';
import trMessages from '@/messages/tr.json';

// Detect locale from URL pathname (next-intl uses this on server)
import { getLocaleFromPathname } from '@/lib/i18n/locale';

const locale = getLocaleFromPathname(('/en').toString()) || 'tr';

export default getRequestConfig(async () => {
  if (locale === 'en') {
    return {
      messages: enMessages,
      timeZone: 'Europe/Istanbul'
    };
  }
  return {
    messages: trMessages,
    timeZone: 'Europe/Istanbul'
  };
});