import mongoose from "mongoose";
import Comment from "../models/comments.js";


export const readComments = async (req,res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        res.status(404).json({err: err.message})
    }


}
export const createComment = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        await comment.save();

        res.status(201).json(comment);
    } catch (err) {
        res.status(409).json({err: err.message})

    }

}
export const updateComment = async (req,res) => {
    const {id} = req.params;
    const {text, name} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`the id ${id} is not valid`);
    }
    const comment = {text, name,_id:id};
    await Comment.findByIdAndUpdate(id, comment, { new:true})
    res.json(comment);
}
export const deleteComment = async (req,res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`the id ${id} is not valid`);
    }
    
    await Comment.findByIdAndDelete(id)
    res.json({message: 'Comment deleted successfully'});
}
// export const getFilterPosted = async (req,res) => {
//     const {name} = req.params;

//     const user = await User.filter({name})

// }