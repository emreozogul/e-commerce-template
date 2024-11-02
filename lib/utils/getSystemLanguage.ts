import { type Locale, locales } from '@/i18n/settings';

export function getSystemLanguage(): Locale {
    if (typeof navigator === 'undefined') return 'en';

    const browserLang = navigator.language.split('-')[0];
    return locales.includes(browserLang as Locale) ? browserLang as Locale : 'en';
}