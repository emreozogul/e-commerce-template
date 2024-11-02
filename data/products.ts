import { Product } from '@/models/Product';

const products: Product[] = [
    {
        id: 1,
        name: 'Ergonomic Office Chair',
        description: 'Premium mesh back office chair with lumbar support',
        price: 299.99,
        rating: 4.5,
        images: [
            'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1589384267710-7a25bc24ab28?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80'
        ],
        promotion: 'new',
        color: 'black',
        material: 'mesh',
        size: 'm'
    },
    {
        id: 2,
        name: 'Standing Desk',
        description: 'Electric height adjustable standing desk',
        price: 499.99,
        rating: 4.8,
        images: [
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587212805560-9175375957b6?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587212805560-9175375957b6?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80'
        ],
        promotion: 'sale',
        color: 'white',
        material: 'wood',
        size: 'l'
    },
    {
        id: 3,
        name: 'Bookshelf',
        description: 'Modern 5-tier bookshelf',
        price: 189.99,
        rating: 4.4,
        images: [
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80'
        ],
        promotion: null,
        color: 'brown',
        material: 'wood',
        size: 'l'
    },
    {
        id: 4,
        name: 'Filing Cabinet',
        description: 'Metal 3-drawer filing cabinet',
        price: 129.99,
        rating: 4.2,
        images: [
            'https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&q=80'
        ],
        promotion: 'sale',
        color: 'gray',
        material: 'metal',
        size: 'm'
    },
    {
        id: 5,
        name: 'Desk Mat',
        description: 'Large leather desk mat',
        price: 39.99,
        rating: 4.7,
        images: [
            'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&q=80'
        ],
        promotion: null,
        color: 'black',
        material: 'leather',
        size: 'l'
    },
    {
        id: 6,
        name: 'Monitor Stand',
        description: 'Aluminum monitor stand with storage',
        price: 89.99,
        rating: 4.5,
        images: [
            'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80'
        ],
        promotion: 'new',
        color: 'silver',
        material: 'aluminum',
        size: 'm'
    },
    {
        id: 7,
        name: 'Desk Organizer',
        description: 'Wooden desk organizer with multiple compartments',
        price: 49.99,
        rating: 4.6,
        images: [
            'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&q=80'
        ],
        promotion: null,
        color: 'brown',
        material: 'wood',
        size: 's'
    },
    {
        id: 8,
        name: 'Task Light',
        description: 'Modern LED task light with wireless charging',
        price: 129.99,
        rating: 4.8,
        images: [
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80'
        ],
        promotion: 'featured',
        color: 'white',
        material: 'metal',
        size: 'm'
    },
    {
        id: 9,
        name: 'Ergonomic Keyboard',
        description: 'Split design ergonomic keyboard',
        price: 159.99,
        rating: 4.7,
        images: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80'
        ],
        promotion: 'new',
        color: 'black',
        material: 'plastic',
        size: 'm'
    },
    {
        id: 10,
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 79.99,
        rating: 4.5,
        images: [
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80'
        ],
        promotion: null,
        color: 'black',
        material: 'plastic',
        size: 'm'
    }
];

export default products;