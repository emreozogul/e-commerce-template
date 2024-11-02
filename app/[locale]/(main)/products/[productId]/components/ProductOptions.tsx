import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProductOptions() {
    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                    Color
                </label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="gray">Gray</SelectItem>
                        <SelectItem value="white">White</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                    Size
                </label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity
                </label>
                <Select defaultValue="1">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                                {num}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
} 