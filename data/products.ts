import { Product } from '@/models/Product';

const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 19.99,
        image: 'https://via.placeholder.com/150',
        rating: 4,
        color: 'black',
        size: 'medium',
        promotion: 'sale',
        material: 'cotton',
        description: 'A comfortable and stylish product perfect for everyday use.'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 29.99,
        image: 'https://via.placeholder.com/150',
        rating: 3,
        color: 'white',
        size: 'large',
        promotion: 'new',
        material: 'cotton',
        description: 'High-quality material with modern design.'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 39.99,
        image: 'https://via.placeholder.com/150',
        rating: 2,
        color: 'red',
        size: 'small',
        promotion: 'featured',
        material: 'cotton',
        description: 'Premium product with attention to detail.'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 49.99,
        image: 'https://via.placeholder.com/150',
        rating: 5,
        color: 'blue',
        size: 'medium',
        promotion: null,
        material: 'cotton',
        description: 'Versatile and durable product for long-lasting use.'
    },
    {
        id: 5,
        name: 'Product 5',
        price: 59.99,
        image: 'https://via.placeholder.com/150',
        rating: 4,
        color: 'green',
        size: 'large',
        promotion: 'sale',
        material: 'cotton',
        description: 'Versatile and durable product for long-lasting use.'
    }

];

export default products;