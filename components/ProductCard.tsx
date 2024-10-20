import Image from 'next/image';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { Product } from '@/models/Product';


interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore(state => state.addItem);

    const handleAddToCart = () => {
        addItem(product);
    };

    return (
        <li className="group relative block overflow-hidden  rounded-lg">
            <div className="group relative block overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition duration-500 group-hover:scale-110"
                    />

                </div>

                <div className="relative border border-gray-100 bg-white p-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1.5 text-xs text-gray-700">${product.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between gap-2">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="mt-3 flex w-full items-center justify-center rounded bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-700"
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            title="View"
                            className="mt-3 flex w-full items-center justify-center rounded bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-700"
                        >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}
