'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
    {
        image: 'https://via.placeholder.com/150',
        title: 'Welcome to Our Store',
        subtitle: 'Discover amazing products at great prices',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'New Arrivals',
        subtitle: 'Check out our latest collection',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Special Offers',
        subtitle: 'Limited time deals on select items',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[500px] overflow-hidden rounded-xl">
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
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center text-white">
                            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                            <p className="text-lg mb-6">{item.subtitle}</p>
                            <button
                                type='button'
                                title="Shop Now"
                                className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
                            >
                                Shop Now
                            </button>
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
