import mongoose from "mongoose";
import Post from "../models/posts.js";



export const readPosts = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({err: err.message})
    }


}
export const createPost = async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();

        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({err: err.message})

    }

}
export const updatePost = async (req,res) => {
    const {id} = req.params;
    const {discription, title} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`the id ${id} is not valid`);
    }
    const post = {discription,title,_id:id};
    await Post.findByIdAndUpdate(id, post, { new:true})
    res.json(post);
}
export const deletePost = async (req,res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`the id ${id} is not valid`);
    }
    
    await Post.findByIdAndDelete(id)
    res.json({message: 'Post deleted successfully'});
}
// export const getFilterPosted = async (req,res) => {
//     const {name} = req.params;

//     const user = await User.filter({name})

// }