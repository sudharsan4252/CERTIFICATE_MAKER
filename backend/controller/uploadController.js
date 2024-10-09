import multer from 'multer';
import xlsx from 'xlsx';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
const s3Client = new S3Client({
    region: process.env.REGION, 
    credentials: {
        accessKeyId: process.env.Access_key, 
        secretAccessKey: process.env.Secret_access_key,
    },
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });



const uploadController=async(req,res)=>{
try {
        const workbook = xlsx.read(req.file.buffer);
        const sheetNames = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

        // Prepare to upload the file to S3
        const fileName = `excel-files/${req.file.originalname}`;
        const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

        // Upload to S3 using v3 SDK
        const uploadParams = {
            Bucket: process.env.BucketName, // Replace with your bucket name
            Key: fileName,
            Body: buffer,
            ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        };

        const command = new PutObjectCommand(uploadParams);
        await s3Client.send(command);

        // Respond with the extracted data and file upload success
        res.json({ data, message: `File uploaded successfully to S3: ${fileName}` });
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).json({ error: 'Failed to process the file.' });
    }
}

export default uploadController;