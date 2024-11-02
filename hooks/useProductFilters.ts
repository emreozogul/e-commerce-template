import { useState, useCallback } from 'react';
import { FilterState } from '@/types/filters';
import { FilterService } from '@/services/filterService';
import { Product } from '@/models/Product';

export function useProductFilters(products: Product[]) {
    const [filters, setFilters] = useState<FilterState>({
        price: [],
        rating: [],
        color: [],
        material: [],
        size: [],
        theme: [],
        promotion: []
    });

    const filteredProducts = FilterService.filterProducts(products, filters);

    const handleFilterChange = useCallback((newFilters: FilterState) => {
        setFilters(newFilters);
    }, []);

    const clearFilters = useCallback(() => {
        setFilters({
            price: [],
            rating: [],
            color: [],
            material: [],
            size: [],
            theme: [],
            promotion: []
        });
    }, []);

    return {
        filters,
        filteredProducts,
        handleFilterChange,
        clearFilters
    };
} 