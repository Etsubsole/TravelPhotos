
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from 'bcryptjs';
import mongoose from "mongoose";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
  const user = await User.findOne({ name });
   //password = await bcrypt.hashSync(password, 10);
   
  if (user && (await user.matchPassword(password)) ){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      //isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });return res.json;
   
  } else {
    res.status(401);
    throw new Error("Invalid UserName or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber,pic } = req.body;
  //password = await bcrypt.hashSync(password, 10);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    phoneNumber,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      phoneNumber:user.phoneNumber,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
export const readUsers = async (req,res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (err) {
      res.status(404).json({err: err.message})
  }


}
 const deleteUserr = asyncHandler(async (req,res) => {
  const {id} = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).send(`the id ${id} is not valid`);
  }
  
  await User.findByIdAndDelete(id)
  res.json({message: 'User deleted successfully'})
})

export { deleteUserr,authUser, getUserProfile, registerUser };