import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const postSchema = new Schema({
   title:String,
    discription: String,
    imgUrl: {
        type: String,
        required: true,
    },
    name:{
        
       type: String,
       required:true,
    },
})

 const Post=mongoose.model('post', postSchema);
 export default Post;
