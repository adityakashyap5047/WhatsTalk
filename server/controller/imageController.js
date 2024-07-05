import grid from "gridfs-stream";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.BACKEND_URL;

let gridFsBucket, gfs;
const conn = mongoose.connection;
conn.once("open", () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "multimedia"
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection("multimedia");
});

export const uploadFile = async (req, res) => {
    try {
        if(!req.file){
            return res.status(400).json("No file uploaded");
        }
        const imageUrl = `${url}/file/${req.file.filename}`;

        return res.status(200).json(imageUrl);

    } catch (err) {
        return res.status(500).json(err.message); 
    }
}

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}