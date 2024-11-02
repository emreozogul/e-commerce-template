import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from '@/models/Product';

type RelatedProductsProps = {
    currentProductId: number;
    products: Product[];
}

export default function RelatedProducts({ currentProductId, products }: RelatedProductsProps) {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, index) => (
                    <Card key={index}>
                        <CardContent className="p-4">
                            <div className="aspect-square overflow-hidden rounded-lg mb-4 relative">
                                <img
                                    src="/placeholder.svg?height=200&width=200"
                                    alt={`Related product ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                                {index === 0 && <Badge className="absolute top-2 right-2 bg-primary">On Sale</Badge>}
                            </div>
                            <h3 className="font-semibold mb-2">Related Product {index + 1}</h3>
                            <p className="text-sm text-gray-500 mb-2">Brief product description</p>
                            <div className="flex items-center justify-between">
                                <div className="font-bold">$199.99</div>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 fill-primary" />
                                    <span className="ml-1 text-sm">4.5</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
} 