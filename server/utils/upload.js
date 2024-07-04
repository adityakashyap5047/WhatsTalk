import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb://127.0.0.1:27017/whatstalk',
    file: (req, file) => {

        return {
            bucketName: "multimedia",
            filename: `${Date.now()}-file-${file.originalname}` 
        } 
    }
});

export default multer({storage});  