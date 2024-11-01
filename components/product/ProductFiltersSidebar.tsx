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
        <div className="w-64 bg-white p-4 border-r min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-sm text-gray-500"
                >
                    Clear all
                </Button>
            </div>

            <Accordion type="multiple" className="space-y-2">
                <AccordionItem value="price">
                    <AccordionTrigger className="text-sm font-medium">
                        Price Range
                    </AccordionTrigger>
                    <AccordionContent>
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
                    <AccordionItem key={category} value={category}>
                        <AccordionTrigger className="text-sm font-medium">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </AccordionTrigger>
                        <AccordionContent>
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
                Apply Filters
            </Button>
        </div>
    );
}
