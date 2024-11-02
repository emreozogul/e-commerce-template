export interface FilterOption {
    value: string;
    label: string;
}

export interface FilterCategory {
    id: string;
    label: string;
    options: FilterOption[];
}

export interface FilterState {
    price: number[];
    rating: string[];
    color: string[];
    material: string[];
    size: string[];
    theme: string[];
    promotion: string[];
}

export interface FilterChangeHandler {
    onFilterChange: (filters: FilterState) => void;
} 