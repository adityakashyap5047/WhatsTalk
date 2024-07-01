import User from '../model/User.js';

export const addUser = async (req, res) => {
    try{
        let exist = await User.findOne({ sub: req.body.sub });
        if(exist){
            res.status(200).json({msg: "User already exists"});
            return;
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        return res.status(500).json(err.message);
    }
}

export const getUser = async (req, res) => {
    try{
        const Users = await User.find({});
        return res.status(200).json(Users);
    } catch (err) {
        return res.status(500).json(err.message);
    }
} 