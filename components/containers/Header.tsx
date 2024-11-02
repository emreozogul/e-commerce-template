'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { ShoppingCart, X, Globe } from 'lucide-react';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/lib/navigation';
import { getSystemLanguage } from '@/lib/utils/getSystemLanguage';
import { locales, type Locale } from '@/i18n/settings';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items, getTotalItems, getTotalPrice, removeItem } = useCartStore();
    const t = useTranslations();
    const router = useRouter();

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const handleOutsideClick = () => setIsCartOpen(false);

    useEffect(() => {
        const hasLanguagePreference = localStorage.getItem('language-preference');

        if (!hasLanguagePreference) {
            const systemLang = getSystemLanguage() as 'en' | 'tr';
            localStorage.setItem('language-preference', systemLang);
            router.replace('/', { locale: systemLang });
        }
    }, [router]);

    const switchLocale = (locale: Locale) => {
        const pathname = window.location.pathname;
        const segments = pathname.split('/').filter(Boolean);

        const pathWithoutLocale = segments
            .filter(segment => !locales.includes(segment as Locale))
            .join('/');

        const newPath = `/${locale}/${pathWithoutLocale}`;

        localStorage.setItem('language-preference', locale);
        router.push(newPath);
    };

    return (
        <header className="text-white sticky top-0 left-0 right-0 z-50 transition-colors duration-300 bg-primary">
            <nav className=" px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    {t('header.store_name')}
                </Link>

                <div className="flex items-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                type="button"
                                title={t('header.language_selector')}
                                className="p-2 bg-primary text-white rounded-xl"
                            >
                                <Globe className="h-6 w-6" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem
                                onSelect={() => switchLocale('en')}
                                className="flex items-center gap-2"
                            >
                                <span className="text-lg">🇬🇧</span>
                                <span>English</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={() => switchLocale('tr')}
                                className="flex items-center gap-2"
                            >
                                <span className="text-lg">🇹🇷</span>
                                <span>Türkçe</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="relative">
                        <button
                            type="button"
                            title="Cart"
                            onClick={toggleCart}
                            className="flex items-center bg-primary text-white rounded-xl p-2 relative"
                        >
                            <ShoppingCart className="h-6 w-6 mr-1" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">{getTotalItems()}</span>
                        </button>
                        {isCartOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20"
                                onMouseLeave={handleOutsideClick}
                            >
                                <div className="max-h-60 overflow-y-auto">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                            <Image src={item.images[0]} alt={item.name} width={50} height={50} className="mr-3" />
                                            <div className="flex-grow">
                                                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                                            </div>
                                            <button
                                                type="button"
                                                title="Remove item"
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-100 px-4 py-3">
                                    <div className="flex justify-between items-center text-black">
                                        <span className="font-medium">{t('header.total')}:</span>
                                        <span>${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <Link href="/cart" className="mt-2 block w-full bg-blue-600 text-white text-center py-2 rounded-md">
                                        {t('header.view_cart')}
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
