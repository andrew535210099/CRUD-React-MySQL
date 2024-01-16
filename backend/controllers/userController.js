import User from "../models/userModel.js";

export const getUsers = async(req,res) => {
    try{
        const response = await User.findAll();
        res.status(200).json(res);
    } catch(error) {
        console.log(error.message);
    }
}