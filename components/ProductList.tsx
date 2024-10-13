'use client';

import { useState } from 'react';
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150', category: 'electronics' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150', category: 'clothing' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150', category: 'books' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150', category: 'electronics' },
    { id: 5, name: 'Product 5', price: 59.99, image: 'https://via.placeholder.com/150', category: 'clothing' },
    { id: 6, name: 'Product 6', price: 69.99, image: 'https://via.placeholder.com/150', category: 'books' },
    { id: 7, name: 'Product 7', price: 79.99, image: 'https://via.placeholder.com/150', category: 'electronics' },
    { id: 8, name: 'Product 8', price: 89.99, image: 'https://via.placeholder.com/150', category: 'clothing' },
    { id: 9, name: 'Product 9', price: 99.99, image: 'https://via.placeholder.com/150', category: 'books' },
    { id: 10, name: 'Product 10', price: 109.99, image: 'https://via.placeholder.com/150', category: 'electronics' },
];

export default function ProductList() {
    const [filters, setFilters] = useState({ category: 'all', priceRange: 'all' });

    const filteredProducts = products.filter(product => {
        const categoryMatch = filters.category === 'all' || product.category === filters.category;
        let priceMatch = true;
        if (filters.priceRange !== 'all') {
            const [min, max] = filters.priceRange.split('-').map(Number);
            priceMatch = product.price >= min && (max ? product.price <= max : true);
        }
        return categoryMatch && priceMatch;
    });

    return (
        <div>
            <ProductFilters onFilterChange={setFilters} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}
