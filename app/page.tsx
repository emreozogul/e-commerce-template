'use client';

import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col  min-h-screen">
      <Header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}`} />
      <Hero />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
