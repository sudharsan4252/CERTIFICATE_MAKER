import { useEffect, useState } from "react";
import OptionImage from "./ui/OptionImage";
import ImageUploader from "./ui/ImageUploader"; // Import the uploader component

const UploadSection: React.FC = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [userId] = useState<string>("user123"); // Example user ID
    const maxImages = 3;

    useEffect(() => {
        // Fetch images from the S3 bucket based on user ID
        const fetchImages = async () => {
            const images = await getImagesFromS3(userId);
            setImageUrls(images);
        };

        fetchImages();
    }, [userId]);

    // Function to handle image deletion
    const handleDelete = (indexToDelete: number) => {
        const updatedImages = imageUrls.filter((_, index) => index !== indexToDelete);
        setImageUrls(updatedImages);
        // Optionally: Remove from S3 if necessary
    };

    // Function to add a new image
    const handleAddImage = (newImageUrl: string) => {
        if (imageUrls.length < maxImages) {
            setImageUrls((prevImages) => [...prevImages, newImageUrl]);
        } else {
            // Replace the last image
            const updatedImages = [...imageUrls.slice(1), newImageUrl];
            setImageUrls(updatedImages);
            // Optionally: Update the database here
        }
    };

    return (
        <div className="w-screen border border-black flex h-[500px] p-2 gap-3">
            <div className="w-4/5 h- border border-pink-800 flex-none">
                Image Preview
                <ImageUploader onAddImage={handleAddImage} />
            </div>
            <div className="flex flex-grow flex-col border-yellow-800 border h-full gap-2 justify-center items-center p-2">
                {imageUrls.map((url, index) => (
                    <OptionImage
                        key={index}
                        imageUrl={url}
                        variant="deletable"
                        onDelete={() => handleDelete(index)}
                    />
                ))}
                {/* If there is space for more images, render empty boxes */}
                {Array(maxImages - imageUrls.length).fill("").map((_, index) => (
                    <OptionImage key={`empty-${index}`} variant="static" />
                ))}
            </div>
        </div>
    );
};

// Mock function to simulate fetching images from S3
const getImagesFromS3 = async (userId: string): Promise<string[]> => {
    // Implement your logic to fetch images from S3 based on userId
    // This is just a mock example
    return [
        "/images/image1.png",
        "/images/image2.png",
        "/images/image3.png",
    ];
};

export default UploadSection;
