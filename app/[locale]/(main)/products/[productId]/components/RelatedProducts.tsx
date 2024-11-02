import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from '@/models/Product';
import Image from 'next/image';

type RelatedProductsProps = {
    currentProductId: number;
    products: Product[];
    translations: {
        title: string;
    };
}

export default function RelatedProducts({ currentProductId, products, translations }: RelatedProductsProps) {
    const relatedProducts = products
        .filter(p => p.id !== currentProductId)
        .slice(0, 4);

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">{translations.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                    <Card key={product.id}>
                        <CardContent className="p-4">
                            <div className="aspect-square overflow-hidden rounded-lg mb-4 relative">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                {product.promotion && (
                                    <Badge className="absolute top-2 right-2 bg-primary">
                                        {product.promotion}
                                    </Badge>
                                )}
                            </div>
                            <h3 className="font-semibold mb-2">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="font-bold">${product.price}</div>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 fill-primary" />
                                    <span className="ml-1 text-sm">{product.rating}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
} 