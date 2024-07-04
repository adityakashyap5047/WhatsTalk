
const url = "http://localhost:3000";

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