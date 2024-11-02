'use client';

import { useState } from 'react';
import ProductCard from "./ProductCard";
import ProductFiltersSidebar from "./ProductFiltersSidebar";
import products from '@/data/products';

export default function ProductList() {
    const [filters, setFilters] = useState<{
        price: number[];
        rating: string[];
        color: string[];
        material: string[];
        size: string[];
        theme: string[];
        promotion: string[];
    }>({
        price: [],
        rating: [],
        color: [],
        material: [],
        size: [],
        theme: [],
        promotion: []
    });
    const filteredProducts = products.filter(product => {
        const categoryMatch = true; // Removed category filter since it's not in the filters state

        let priceMatch = true;
        if (filters.price.length > 0) {
            const [min, max] = filters.price;
            priceMatch = product.price >= Number(min) && product.price <= Number(max);
        }

        const ratingMatch = filters.rating.length === 0 ||
            product.rating >= parseInt(filters.rating[0].replace('+', ''));

        const colorMatch = filters.color.length === 0 || product.color === filters.color[0];
        const sizeMatch = filters.size.length === 0 || product.size === filters.size[0];
        const promotionMatch = filters.promotion.length === 0 || product.promotion === filters.promotion[0];

        return categoryMatch && priceMatch && ratingMatch && colorMatch &&
            sizeMatch && promotionMatch;
    });

    return (
        <div className="flex gap-6 px-6">
            <ProductFiltersSidebar onFilterChange={setFilters} />
            <div className="flex-1 max-w-7xl mx-auto">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
