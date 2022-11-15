import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const commentSchema = new Schema({
   text: String,
    commenter:{
    type:String,
    required:true,
    },
    commentTo:{
    type:String,
    required:true,
    }
})

 const Comment=mongoose.model('comment', commentSchema);
 export default Comment;