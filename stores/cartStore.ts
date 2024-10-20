import { create } from 'zustand';
import { Product } from '@/models/Product';

interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    addItem: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
            return {
                items: state.items.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
    removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId),
    })),
    updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
            item.id === productId ? { ...item, quantity } : item
        ),
    })),
    clearCart: () => set({ items: [] }),
    getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
    getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
}));
