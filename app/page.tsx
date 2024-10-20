import Header from '@/components/containers/Header';
import Hero from '@/components/containers/Hero';
import ProductList from '@/components/product/ProductList';
import Footer from '@/components/containers/Footer';

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
