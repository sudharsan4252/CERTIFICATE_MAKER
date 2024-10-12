import { useState } from "react";

interface ImageUploaderProps {
    onAddImage: (imageUrl: string) => void; // Callback to pass the new image URL
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onAddImage }) => {
    const [imageUrl, setImageUrl] = useState<string>("");

    // Function to handle image upload (mock implementation)
    const handleUpload = async () => {
        // Here, you would implement the logic to upload to S3
        // After uploading, get the image URL

        // Mocking the uploaded image URL for demonstration
        const uploadedImageUrl = imageUrl; // Replace with actual URL after upload
        onAddImage(uploadedImageUrl); // Call the parent function with the new image URL
        setImageUrl(""); // Clear the input field after upload
    };

    return (
        <div>
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Paste image URL or upload"
            />
            <button onClick={handleUpload}>Upload</button>
            <button onClick={() => setImageUrl("")}>Clear</button>
        </div>
    );
};

export default ImageUploader;
