import { Hero } from '@/components/containers';
import ProductList from '@/components/product/ProductList';

export default function Home() {


  return (
    <div className="flex flex-col  min-h-screen gap-8">
      <div className=' w-full max-w-7xl mx-auto'>
        <Hero />
      </div>

      <ProductList />

    </div>
  );
}
