'use client';

import { useState } from 'react';
import ProductCard from "./ProductCard";
import ProductFiltersSidebar from "./ProductFiltersSidebar";

import { Product } from '@/models/Product';

const products: Product[] = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150', rating: 4, color: 'black', size: 'medium', promotion: 'sale', material: 'cotton' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150', rating: 3, color: 'white', size: 'large', promotion: 'new', material: 'cotton' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150', rating: 2, color: 'red', size: 'small', promotion: 'featured', material: 'cotton' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150', rating: 5, color: 'blue', size: 'medium', promotion: null, material: 'cotton' },
    { id: 5, name: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150', rating: 4, color: 'green', size: 'large', promotion: 'sale', material: 'cotton' },
    { id: 6, name: 'Product 6', price: 69.99, image: 'https://via.placeholder.com/150', rating: 3, color: 'yellow', size: 'small', promotion: 'new', material: 'cotton' },
    { id: 7, name: 'Product 7', price: 79.99, image: 'https://via.placeholder.com/150', rating: 1, color: 'purple', size: 'large', promotion: null, material: 'cotton' },
    { id: 8, name: 'Product 8', price: 89.99, image: 'https://via.placeholder.com/150', rating: 4, color: 'orange', size: 'medium', promotion: 'sale', material: 'cotton' },
    { id: 9, name: 'Product 9', price: 99.99, image: 'https://via.placeholder.com/150', rating: 3, color: 'pink', size: 'small', promotion: 'new', material: 'cotton' },
    { id: 10, name: 'Product 10', price: 109.99, image: 'https://via.placeholder.com/150', rating: 4, color: 'black', size: 'medium', promotion: 'sale', material: 'cotton' },
];

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
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
