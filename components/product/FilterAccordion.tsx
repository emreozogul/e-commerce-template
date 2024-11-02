import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { FilterState } from "@/types/filters";

interface FilterAccordionProps {
    filters: FilterState;
    onFilterChange: (category: keyof Omit<FilterState, 'price'>, value: string) => void;
    onPriceChange: (values: number[]) => void;
    translations: any; // Replace with proper translations type
}

const FILTER_OPTIONS = {
    rating: ['4+', '3+', '2+', '1+'],
    color: ['Black', 'White', 'Red', 'Blue', 'Green'],
    material: ['Cotton', 'Polyester', 'Leather', 'Metal', 'Wood'],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    theme: ['Summer', 'Winter', 'Casual', 'Formal', 'Sport'],
    promotion: ['New', 'Featured', 'Sale']
};

export default function FilterAccordion({ filters, onFilterChange, onPriceChange, translations }: FilterAccordionProps) {
    return (
        <Accordion type="multiple" className="w-full space-y-2">
            <AccordionItem value="price" className="w-full">
                <AccordionTrigger className="text-sm font-medium w-full">
                    {translations('price_range')}
                </AccordionTrigger>
                <AccordionContent className="w-full pt-4">
                    <Slider
                        defaultValue={[0, 1000]}
                        max={1000}
                        step={10}
                        onValueChange={onPriceChange}
                    />
                </AccordionContent>
            </AccordionItem>

            {Object.entries(FILTER_OPTIONS).map(([category, options]) => (
                <AccordionItem key={category} value={category} className="w-full">
                    <AccordionTrigger className="text-sm font-medium w-full">
                        {translations(`categories.${category}`)}
                    </AccordionTrigger>
                    <AccordionContent className="w-full">
                        <div className="space-y-2">
                            {options.map((option) => (
                                <div key={option} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={`${category}-${option}`}
                                        checked={filters[category as keyof typeof FILTER_OPTIONS].includes(option)}
                                        onCheckedChange={() => onFilterChange(category as keyof Omit<FilterState, 'price'>, option)}
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
    );
} 