'use client';

import { useTranslations } from 'next-intl';
import FilterHeader from './FilterHeader';
import FilterAccordion from './FilterAccordion';
import FilterButtons from './FilterButtons';
import { useFilters } from '@/hooks/useFilters';
import { FilterState } from '@/types/filters';

interface FilterProps {
    onFilterChange: (filters: FilterState) => void;
}

export default function ProductFiltersSidebar({ onFilterChange }: FilterProps) {
    const t = useTranslations('filters');
    const { filters, handleFilterChange, handlePriceChange, clearFilters } = useFilters(onFilterChange);

    return (
        <div className="w-full lg:w-64 bg-white p-4">
            <FilterHeader title={t('title')} onClear={clearFilters} />
            <FilterAccordion
                filters={filters}
                onFilterChange={handleFilterChange}
                onPriceChange={handlePriceChange}
                translations={t}
            />
            <FilterButtons
                onApply={() => onFilterChange(filters)}
                onClear={clearFilters}
                translations={t}
            />
        </div>
    );
}
