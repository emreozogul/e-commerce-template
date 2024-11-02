import { Button } from "@/components/ui/button";

interface FilterButtonsProps {
    onApply: () => void;
    onClear: () => void;
    translations: any; // Replace with proper translations type
}

export default function FilterButtons({ onApply, onClear, translations }: FilterButtonsProps) {
    return (
        <div className="flex gap-2 mt-4">
            <Button
                variant="outline"
                onClick={onClear}
                className="flex-1"
            >
                {translations('clear')}
            </Button>
            <Button
                onClick={onApply}
                className="flex-1"
            >
                {translations('apply')}
            </Button>
        </div>
    );
} 