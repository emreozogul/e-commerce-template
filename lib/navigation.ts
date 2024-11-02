import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, type Locale } from '@/i18n/settings';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation<typeof locales, 'as-needed'>({
    locales,
    localePrefix: 'as-needed'
});
