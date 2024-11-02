export interface Review {
    id: number;
    userId: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    helpful: number;
    images?: string[];
}

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    color: string;
    material: string;
    size: string;
    description?: string;
    theme?: string;
    promotion?: 'new' | 'featured' | 'sale' | null;
    reviews?: Review[];
}

