import { getSystemLanguage } from "@/lib/utils/getSystemLanguage";

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = getSystemLanguage();

// Fallback locales for each language
export const fallbacks = {
    'tr-TR': 'tr',
    'en-US': 'en',
    'en-GB': 'en',
} as const;
