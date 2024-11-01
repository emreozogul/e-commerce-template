export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    color: string;
    material: string;
    size: string;
    theme?: string;
    promotion?: 'new' | 'featured' | 'sale' | null;
}

