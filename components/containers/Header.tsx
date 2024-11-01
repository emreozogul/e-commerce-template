'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/cartStore';
import { ShoppingCart, X, Menu } from 'lucide-react';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [variant, setVariant] = useState<'default' | 'scrolled' | 'onProduct'>('default');
    const { items, getTotalItems, getTotalPrice, removeItem } = useCartStore();

    const variants = {
        default: 'bg-gray-800 text-white',
        scrolled: 'bg-gray-800 text-white',
        onProduct: 'bg-gray-800 text-white',
    }

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const handleOutsideClick = () => setIsCartOpen(false);

    return (
        <header className={cn('text-white sticky top-0 left-0 right-0 z-50 transition-colors duration-300', variants[variant])}>
            <nav className=" px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    E-Commerce Store
                </Link>

                <div className="flex items-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                type="button"
                                title="Menu"
                                className={cn(
                                    'p-2 bg-primary text-white rounded-xl',
                                    variant === 'scrolled' ? 'bg-white text-black' : 'bg-primary text-white'
                                )}
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href="/">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/products">Products</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="relative">
                        <button
                            type="button"
                            title="Cart"
                            onClick={toggleCart}
                            className={cn(
                                'flex items-center bg-primary text-white rounded-xl p-2 relative',
                                variant === 'scrolled' ? 'bg-white text-black' : 'bg-primary text-white'
                            )}
                        >
                            <ShoppingCart className="h-6 w-6 mr-1" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1 text-xs">{getTotalItems()}</span>
                        </button>
                        {isCartOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20"
                                onMouseLeave={handleOutsideClick}
                            >
                                <div className="max-h-60 overflow-y-auto">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex items-center px-4 py-3 hover:bg-gray-100">
                                            <Image src={item.image} alt={item.name} width={50} height={50} className="mr-3" />
                                            <div className="flex-grow">
                                                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                                            </div>
                                            <button
                                                type="button"
                                                title="Remove item"
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-100 px-4 py-3">
                                    <div className="flex justify-between items-center text-black">
                                        <span className="font-medium">Total:</span>
                                        <span>${getTotalPrice().toFixed(2)}</span>
                                    </div>
                                    <Link href="/cart" className="mt-2 block w-full bg-blue-600 text-white text-center py-2 rounded-md">
                                        View Cart
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
