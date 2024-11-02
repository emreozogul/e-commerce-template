import { Star, ShoppingCart, Heart, Flame, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductOptions from './ProductOptions';
import { Product } from '@/models/Product';

type ProductInfoProps = {
    product: Product;
    translations: {
        addToCart: string;
        addToWishlist: string;
        by: string;
        reviews: string;
        selectColor: string;
        selectSize: string;
    };
};

export default function ProductInfo({ product, translations }: ProductInfoProps) {
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <Badge variant="secondary">{product.promotion || 'Featured'}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">by ErgoComfort</p>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary" />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">(121 reviews)</span>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold">$299.99</div>
                <Badge variant="destructive">20% OFF</Badge>
            </div>

            <ProductOptions />

            <div className="flex space-x-4">
                <Button className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {translations.addToCart}
                </Button>
                <Button variant="outline">
                    <Heart className="w-4 h-4" />
                    <span className="sr-only">{translations.addToWishlist}</span>
                </Button>
            </div>

            <div className="space-y-2">
                <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    <span className="text-sm">Material: Premium Mesh and High-Density Foam</span>
                </div>
                <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-2" />
                    <span className="text-sm">Popularity: Top Seller</span>
                </div>
            </div>
        </div>
    );
} 