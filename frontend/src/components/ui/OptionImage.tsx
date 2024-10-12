import { useRef } from "react";

interface OptionImageProps {
    imageUrl?: string; // Optional image URL, to handle cases when there is no image
    onDelete?: () => void; // Optional delete handler
    variant?: "deletable" | "static"; // Variants for image behavior
}

export default function OptionImage({ imageUrl, onDelete, variant = "static" }: OptionImageProps) {
    const input = useRef<HTMLImageElement>(null);

    return (
        <div className="relative w-full h-4/5 border border-orange-900 flex items-center justify-center">
            {/* Conditionally render the image or a placeholder */}
            {imageUrl ? (
                <img ref={input} src={imageUrl} alt="Option" className="max-h-full max-w-full object-cover" />
            ) : (
                <div className="text-gray-500">No Image</div>
            )}

            {/* Conditionally render the delete button if the variant is 'deletable' */}
            {variant === "deletable" && onDelete && (
                <button
                    onClick={onDelete}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                    X
                </button>
            )}
        </div>
    );
}
