import { Product } from '@/models/Product';
import { FilterState } from '@/types/filters';

export class FilterService {
    static filterProducts(products: Product[], filters: FilterState): Product[] {
        return products.filter(product => {
            return this.applyAllFilters(product, filters);
        });
    }

    private static applyAllFilters(product: Product, filters: FilterState): boolean {
        const filterChecks = [
            this.checkPriceFilter(product, filters.price),
            this.checkRatingFilter(product, filters.rating),
            this.checkAttributeFilter(product.color, filters.color),
            this.checkAttributeFilter(product.size, filters.size),
            this.checkAttributeFilter(product.promotion || null, filters.promotion)
        ];

        return filterChecks.every(check => check);
    }

    private static checkPriceFilter(product: Product, priceRange: number[]): boolean {
        if (priceRange.length === 0) return true;
        const [min, max] = priceRange;
        return product.price >= min && product.price <= max;
    }

    private static checkRatingFilter(product: Product, ratings: string[]): boolean {
        if (ratings.length === 0) return true;
        return product.rating >= parseInt(ratings[0].replace('+', ''));
    }

    private static checkAttributeFilter(value: string | null, filterValues: string[]): boolean {
        if (filterValues.length === 0) return true;
        return filterValues.includes(value || '');
    }
} 
