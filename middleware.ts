import createMiddleware from 'next-intl/middleware';
import { locales, type Locale } from './i18n/settings';

export default createMiddleware({
    locales,
    defaultLocale: 'en' as Locale,
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};