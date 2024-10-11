import Link from 'next/link';

export default function Header({ className = '' }) {
    return (
        <header className={`text-white ${className}`}>
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    E-Commerce Store
                </Link>
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
}
