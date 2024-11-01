import { useState } from 'react';

interface FilterProps {
    onFilterChange: (filters: {
        category: string;
        priceRange: string;
        rating: string;
        color: string;
        size: string;
        promotion: string;
    }) => void;
}

const FILTER_OPTIONS = {
    category: ['all', 'electronics', 'clothing', 'books'],
    priceRange: ['all', '0-50', '50-100', '100-200', '200+'],
    rating: ['all', '4+', '3+', '2+', '1+'],
    color: ['all', 'black', 'white', 'red', 'blue', 'green'],
    size: ['all', 'small', 'medium', 'large'],
    promotion: ['all', 'new', 'featured', 'sale']
};

export default function ProductFilters({ onFilterChange }: FilterProps) {
    const [selectedFilter, setSelectedFilter] = useState('category');
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        rating: 'all',
        color: 'all',
        size: 'all',
        promotion: 'all'
    });

    const handleFilterChange = (value: string) => {
        const newFilters = {
            ...filters,
            [selectedFilter]: value
        };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <select
                title="Filter by"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full sm:w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                <option value="category">Category</option>
                <option value="priceRange">Price Range</option>
                <option value="rating">Rating</option>
                <option value="color">Color</option>
                <option value="size">Size</option>
                <option value="promotion">Promotion</option>
            </select>

            <select
                title={`Filter by ${selectedFilter}`}
                value={filters[selectedFilter as keyof typeof filters]}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="w-full sm:w-2/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
                {FILTER_OPTIONS[selectedFilter as keyof typeof FILTER_OPTIONS].map(option => (
                    <option key={option} value={option}>
                        {option === 'all'
                            ? `All ${selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}s`
                            : option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
}

