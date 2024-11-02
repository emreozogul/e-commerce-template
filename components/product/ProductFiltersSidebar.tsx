'use client';

import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useTranslations } from 'next-intl';
import { Trash2 } from 'lucide-react';

interface FilterProps {
    onFilterChange: (filters: {
        price: number[];
        rating: string[];
        color: string[];
        material: string[];
        size: string[];
        theme: string[];
        promotion: string[];
    }) => void;
}

const FILTER_OPTIONS = {
    rating: ['4+', '3+', '2+', '1+'],
    color: ['Black', 'White', 'Red', 'Blue', 'Green'],
    material: ['Cotton', 'Polyester', 'Leather', 'Metal', 'Wood'],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    theme: ['Summer', 'Winter', 'Casual', 'Formal', 'Sport'],
    promotion: ['New', 'Featured', 'Sale']
};

const PRICE_RANGE = {
    min: 0,
    max: 1000,
    step: 10
};

export default function ProductFiltersSidebar({ onFilterChange }: FilterProps) {
    const t = useTranslations('filters');
    const [selectedFilters, setSelectedFilters] = useState<{
        price: number[];
        rating: string[];
        color: string[];
        material: string[];
        size: string[];
        theme: string[];
        promotion: string[];
    }>({
        price: [0, PRICE_RANGE.max],
        rating: [],
        color: [],
        material: [],
        size: [],
        theme: [],
        promotion: []
    });

    const handleFilterChange = (category: keyof Omit<typeof selectedFilters, 'price'>, value: string) => {
        setSelectedFilters(prev => {
            const updatedFilters = { ...prev };
            if (updatedFilters[category].includes(value)) {
                updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
            } else {
                updatedFilters[category] = [...updatedFilters[category], value];
            }
            return updatedFilters;
        });
    };

    const handlePriceChange = (values: number[]) => {
        setSelectedFilters(prev => ({
            ...prev,
            price: values
        }));
    };

    const handleApplyFilters = () => {
        onFilterChange(selectedFilters as {
            price: number[];
            rating: string[];
            color: string[];
            material: string[];
            size: string[];
            theme: string[];
            promotion: string[];
        });
    };

    const clearFilters = () => {
        setSelectedFilters({
            price: [0, PRICE_RANGE.max],
            rating: [],
            color: [],
            material: [],
            size: [],
            theme: [],
            promotion: []
        });
        onFilterChange({
            price: [],
            rating: [],
            color: [],
            material: [],
            size: [],
            theme: [],
            promotion: []
        });
    };

    return (
        <div className="w-full lg:w-64 bg-white p-4">
            <div className="flex flex-col sm:flex-row  sm:justify-between sm:items-center mb-4">
                <h2 className="text-lg font-semibold">{t('title')}</h2>

            </div>

            <Accordion type="multiple" className="w-full space-y-2">
                <AccordionItem value="price" className="w-full">
                    <AccordionTrigger className="text-sm font-medium w-full">
                        {t('price_range')}
                    </AccordionTrigger>
                    <AccordionContent className="w-full">
                        <div className="space-y-5">
                            <Slider
                                defaultValue={[0, PRICE_RANGE.max]}
                                max={PRICE_RANGE.max}
                                min={PRICE_RANGE.min}
                                step={PRICE_RANGE.step}
                                value={selectedFilters.price as number[]}
                                onValueChange={handlePriceChange}
                                className="mt-2"
                            />
                            <div className="flex justify-between">
                                <span className="text-sm">
                                    ${selectedFilters.price[0]}
                                </span>
                                <span className="text-sm">
                                    ${selectedFilters.price[1]}
                                </span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
                    <AccordionItem key={category} value={category} className="w-full">
                        <AccordionTrigger className="text-sm font-medium w-full">
                            {t(`categories.${category}`)}
                        </AccordionTrigger>
                        <AccordionContent className="w-full">
                            <div className="space-y-2">
                                {options.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`${category}-${option}`}
                                            checked={selectedFilters[category as keyof typeof FILTER_OPTIONS].includes(option)}
                                            onCheckedChange={() => handleFilterChange(category as keyof Omit<typeof selectedFilters, 'price'>, option)}
                                        />
                                        <label
                                            htmlFor={`${category}-${option}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <Button
                className="w-full mt-4"
                onClick={handleApplyFilters}
            >
                {t('apply_filters')}
            </Button>
            <Button
                onClick={clearFilters}
                className="text-sm text-gray-500 p-2 sm:p-1 gap-2 w-full mt-2 text-white bg-black/60 hover:bg-black/80"
            >
                <Trash2 className="h-5 w-5 sm:hidden hover:text-red-500 transition-colors" />
                <span className="">{t('clear_all')}</span>
            </Button>
        </div>
    );
}
