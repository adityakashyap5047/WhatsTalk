import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from "dotenv";

dotenv.config();

const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    file: (req, file) => {

        return {
            bucketName: "multimedia",
            filename: `${Date.now()}-file-${file.originalname}` 
        } 
    }
});

export default multer({storage});