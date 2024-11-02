import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterHeaderProps {
    title: string;
    onClear: () => void;
}

export default function FilterHeader({ title, onClear }: FilterHeaderProps) {
    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <Button
                variant="ghost"
                size="sm"
                onClick={onClear}
                className="text-sm text-gray-500 p-2 sm:p-1"
            >
                <span className="hidden sm:inline">Clear all</span>
                <Trash2 className="h-5 w-5 sm:hidden hover:text-red-500 transition-colors" />
            </Button>
        </div>
    );
} 