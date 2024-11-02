import { useState, useCallback } from 'react';
import { FilterState } from '@/types/filters';

const DEFAULT_PRICE_RANGE = {
    min: 0,
    max: 1000,
    step: 10
};

export function useFilters(onFilterChange: (filters: FilterState) => void) {
    const [filters, setFilters] = useState<FilterState>({
        price: [DEFAULT_PRICE_RANGE.min, DEFAULT_PRICE_RANGE.max],
        rating: [],
        color: [],
        material: [],
        size: [],
        theme: [],
        promotion: []
    });

    const handleFilterChange = useCallback((
        category: keyof Omit<FilterState, 'price'>,
        value: string
    ) => {
        setFilters(prev => {
            const updatedFilters = { ...prev };
            if (updatedFilters[category].includes(value)) {
                updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
            } else {
                updatedFilters[category] = [...updatedFilters[category], value];
            }
            return updatedFilters;
        });
    }, []);

    const handlePriceChange = useCallback((values: number[]) => {
        setFilters(prev => ({
            ...prev,
            price: values
        }));
    }, []);

    const clearFilters = useCallback(() => {
        const clearedFilters: FilterState = {
            price: [DEFAULT_PRICE_RANGE.min, DEFAULT_PRICE_RANGE.max],
            rating: [],
            color: [],
            material: [],
            size: [],
            theme: [],
            promotion: []
        };
        setFilters(clearedFilters);
        onFilterChange(clearedFilters);
    }, [onFilterChange]);

    return {
        filters,
        handleFilterChange,
        handlePriceChange,
        clearFilters
    };
} 