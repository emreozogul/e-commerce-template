import { useState } from 'react';

interface FilterProps {
    onFilterChange: (filters: { category: string; priceRange: string }) => void;
}

export default function ProductFilters({ onFilterChange }: FilterProps) {
    const [category, setCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');

    const handleFilterChange = (filterType: 'category' | 'priceRange', value: string) => {
        if (filterType === 'category') {
            setCategory(value);
        } else {
            setPriceRange(value);
        }
        onFilterChange({ category, priceRange: value });
    };

    return (
        <div className="mb-6 flex flex-wrap gap-4">
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="all">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                </select>
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select
                    id="price"
                    value={priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="all">All Prices</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101+">$101+</option>
                </select>
            </div>
        </div>
    );
}

