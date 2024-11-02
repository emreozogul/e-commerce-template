import { Hero } from '@/components/containers';
import ProductList from '@/components/product/ProductList';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-4 md:gap-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 md:py-6">
          <Hero />
        </div>
      </div>

      <div className="w-full">
        <ProductList />
      </div>
    </div>
  );
}
