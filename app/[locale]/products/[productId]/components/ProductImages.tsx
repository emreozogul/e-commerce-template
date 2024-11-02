import { Badge } from "@/components/ui/badge";

interface ProductImagesProps {
    images: string[];
    currentImage: number;
    onImageChange: (index: number) => void;
}

export default function ProductImages({ images, currentImage, onImageChange }: ProductImagesProps) {
    return (
        <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg relative">
                <img
                    src={images[currentImage]}
                    alt="Product image"
                    className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2 bg-primary">New Arrival</Badge>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <button
                        key={index}
                        className={`aspect-square overflow-hidden rounded-lg ${index === currentImage ? 'ring-2 ring-primary' : ''
                            }`}
                        onClick={() => onImageChange(index)}
                    >
                        <img
                            src={img}
                            alt={`Product thumbnail ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
} 