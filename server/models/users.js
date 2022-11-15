import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const userSchema = new Schema({
   name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    }

})

 const Userr=mongoose.model('user', userSchema);
 export default Userr;
