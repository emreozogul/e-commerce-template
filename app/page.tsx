import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {


  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
