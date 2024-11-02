import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/models/Product";
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Review } from "@/models/Product";
import Image from "next/image";

type ProductTabsProps = {
    product: Product;
    translations: {
        descriptionTitle: string;
        specificationsTitle: string;
        reviewsTitle: string;
    };
};

export default function ProductTabs({ product, translations }: ProductTabsProps) {
    return (
        <div className="mt-16">
            <Tabs defaultValue="description">
                <TabsList>
                    <TabsTrigger value="description">{translations.descriptionTitle}</TabsTrigger>
                    <TabsTrigger value="specifications">{translations.specificationsTitle}</TabsTrigger>
                    <TabsTrigger value="reviews">{translations.reviewsTitle}</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                    <p>
                        Experience ultimate comfort and support with our Ergonomic Desk Chair. Designed to promote proper posture
                        and reduce fatigue during long work hours, this chair features adjustable lumbar support, a breathable mesh
                        backrest, and a cushioned seat. The chair&apos;s sleek and modern design complements any office or home workspace.
                    </p>
                    <p className="mt-4">
                        Perfect for the summer season, this chair&apos;s breathable mesh material keeps you cool and comfortable
                        throughout the day. Ideal for both home offices and professional settings.
                    </p>
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Adjustable height: 17&quot; - 21&quot;</li>
                        <li>Weight capacity: 300 lbs</li>
                        <li>360-degree swivel</li>
                        <li>Tilt mechanism with tension control</li>
                        <li>Five-star base with smooth-rolling casters</li>
                        <li>Material: Premium mesh backrest, high-density foam seat</li>
                        <li>Available sizes: Small, Medium, Large</li>
                        <li>Available colors: Black, Gray, White</li>
                    </ul>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                    <ReviewStats reviews={product.reviews || []} />
                    {product.reviews?.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    );
}

const ReviewStats = ({ reviews }: { reviews: Review[] }) => {
    const totalReviews = reviews.length;
    const ratingCounts = reviews.reduce((acc, review) => {
        acc[review.rating] = (acc[review.rating] || 0) + 1;
        return acc;
    }, {} as Record<number, number>);

    return (
        <div className="flex gap-8 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
                <div className="text-4xl font-bold">{(reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)}</div>
                <div className="flex items-center justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <div className="text-sm text-gray-500 mt-1">{totalReviews} reviews</div>
            </div>
            <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                        <div className="w-12 text-sm text-gray-600">{rating} stars</div>
                        <Progress value={(ratingCounts[rating] || 0) / totalReviews * 100} className="h-2" />
                        <div className="w-12 text-sm text-gray-600">{ratingCounts[rating] || 0}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ review }: { review: Review }) => {
    return (
        <div className="border-b py-4">
            <div className="flex items-start gap-4">
                <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/${review.userName}`} />
                    <AvatarFallback>{review.userName.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{review.userName}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                        ))}
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                    {review.images && (
                        <div className="flex gap-2 mt-3">
                            {review.images.map((image, i) => (
                                <div key={i} className="relative w-20 h-20">
                                    <Image
                                        src={image}
                                        alt={`Review image ${i + 1}`}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center gap-4 mt-3">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Helpful ({review.helpful})
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}; 