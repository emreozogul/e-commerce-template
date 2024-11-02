'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/lib/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('footer');
    const { toast } = useToast();
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Add your subscription logic here
            toast({
                title: t('subscribeSuccess'),
                description: t('subscribeMessage'),
            });
            setEmail('');
        } catch (error) {
            console.error(error);
            toast({
                title: t('error'),
                description: t('subscribeError'),
                variant: 'destructive',
            });
        }
    };

    const footerLinks = {
        'shop': ['newArrivals', 'bestSellers', 'onSale'],
        'support': ['contactUs', 'shipping', 'returns', 'faq'],
        'legal': ['terms', 'privacy', 'cookies']
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    return (
        <footer className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Company Info & Newsletter */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900">E-Commerce</h2>
                        <p className="mt-4 text-gray-600 text-sm max-w-md">
                            {t('description')}
                        </p>

                        <form onSubmit={handleSubscribe} className="mt-6">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('emailPlaceholder')}
                                    className="flex-1"
                                    required
                                />
                                <Button type="submit">
                                    {t('subscribe')}
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6 flex gap-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="text-gray-600 hover:text-black transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-3 gap-4 lg:col-span-2 justify-items-end">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-medium text-gray-900 uppercase text-sm text-left">
                                    {t(`${category}.title`)}
                                </h3>
                                <ul className="mt-4 space-y-2">
                                    {links.map((link) => (
                                        <li key={link} className="text-left">
                                            <Link
                                                href={`/${category}/${link.toLowerCase()}`}
                                                className="text-gray-600 hover:text-black transition-colors text-sm"
                                            >
                                                {t(`${category}.${link}`)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-100 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} {t('copyright')}
                        </p>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link}
                                    href={`/legal/${link.toLowerCase()}`}
                                    className="text-xs text-gray-500 hover:text-black transition-colors"
                                >
                                    {t(`legal.${link}`)}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

