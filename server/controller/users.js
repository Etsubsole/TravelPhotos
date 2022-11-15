import mongoose from "mongoose";
import Userr from "../models/users.js";
//import jwt  from "jsonwebtoken";

export const readUsers = async (req,res) => {
    try {
        const users = await Userr.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({err: err.message})
    }


}
export const createUser = async (req, res) => {
    const user = new Userr(req.body);
    try {
        await user.save();


        res.status(201).json(user);
    } catch (err) {
        res.status(409).json({err: err.message})

    }

}
export const updateUser = async (req,res) => {
    const {id} = req.params;
    const {userName,phoneNumber,email, imgUrl} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`the id ${id} is not valid`);
    }
    const user = {userName,phoneNumber,email,imgUrl,_id:id};
    await Userr.findByIdAndUpdate(id, user, { new:true})
    res.json(user);
}
export const deleteUser = async (req,res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`the id ${id} is not valid`);
    }
    
    await Userr.findByIdAndDelete(id)
    res.json({message: 'User deleted successfully'});
}