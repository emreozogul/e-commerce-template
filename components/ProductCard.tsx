import Image from 'next/image';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <li className="group relative block overflow-hidden hover:!opacity-100 rounded-lg">
            <a href="#" className="group relative block overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition duration-500 group-hover:scale-105"
                    />
                    <button
                        className="absolute end-2 top-2 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                    >
                        <span className="sr-only">Wishlist</span>
                        <Heart className="h-4 w-4" />
                    </button>
                </div>

                <div className="relative border border-gray-100 bg-white p-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1.5 text-xs text-gray-700">${product.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between gap-2">
                        <button
                            className="mt-3 flex w-full items-center justify-center rounded bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-700"
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </button>
                        <button
                            title="View"
                            className="mt-3 flex w-full items-center justify-center rounded bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-700"
                        >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                        </button>
                    </div>
                </div>
            </a>
        </li>
    );
}
