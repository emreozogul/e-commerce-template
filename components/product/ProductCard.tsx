"use client";

import Image from 'next/image';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { Product } from '@/models/Product';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore(state => state.addItem);
    const router = useRouter();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem(product);
    };

    const handleViewProduct = () => {
        router.push(`/products/${product.id}`);
    };

    const getPromotionBadge = () => {
        if (!product.promotion) return null;

        const badgeColors = {
            new: 'bg-blue-500',
            featured: 'bg-purple-500',
            sale: 'bg-red-500'
        };

        return (
            <span className={cn(
                'absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-md z-10',
                badgeColors[product.promotion]
            )}>
                {product.promotion.toUpperCase()}
            </span>
        );
    };

    const renderRatingStars = () => {
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={cn(
                            'h-4 w-4',
                            index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                        )}
                    />
                ))}
            </div>
        );
    };

    return (
        <li className="group relative block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            {getPromotionBadge()}
            <div onClick={handleViewProduct} className="cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-4 bg-white">
                    <div className="mb-2">
                        <h3 className="text-sm font-medium text-gray-900 mt-1">{product.name}</h3>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                        {renderRatingStars()}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{product.size}</span>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full capitalize">{product.color}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="flex-1 flex items-center justify-center rounded bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-700"
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            onClick={handleViewProduct}
                            className="flex-1 flex items-center justify-center rounded border border-gray-900 px-3 py-2 text-xs font-medium text-gray-900 transition hover:bg-gray-100"
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
