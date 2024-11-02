'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

export default function Hero() {
    const t = useTranslations('hero');
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselItems = [
        {
            image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
            title: t('welcome'),
            subtitle: t('discover'),
            cta: t('shop_now')
        },
        {
            image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80',
            title: t('new_arrivals'),
            subtitle: t('check_latest'),
            cta: t('shop_now')
        },
        {
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
            title: t('special_offers'),
            subtitle: t('limited_deals'),
            cta: t('shop_now')
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide, carouselItems.length]);

    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg md:rounded-xl">
            {carouselItems.map((item, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={item.image}
                        alt={`Hero Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{item.title}</h1>
                            <p className="text-base sm:text-lg mb-4 sm:mb-6">{item.subtitle}</p>
                            <Link
                                href="/shop"
                                title={item.cta}
                                className="bg-white text-black px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm sm:text-base"
                            >
                                {item.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
                {carouselItems.map((_, index) => (
                    <button
                        type='button'
                        title={`Slide ${index + 1}`}
                        key={index}
                        className={`w-3 h-3 rounded-full mx-2 ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
