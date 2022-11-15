import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import postsRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';
import commentsRoutes from './routes/comments.js';
//import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
dotenv.config();
//app config
const app = express();
const port = process.env.PORT || 9000;


//middlwares

app.use(express.json())

app.use((req,res, next) =>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()

})
app.use(cors());
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);
app.use('/api/users', userRoutes);
app.use('/comments', commentsRoutes);


app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// erros
app.use(notFound);
app.use(errorHandler);
//DB config
const connection_url ="mongodb+srv://news:news@cluster0.2p2woov.mongodb.net/travler?retryWrites=true&w=majority";
 

mongoose.connect(connection_url, err => {
    if(err) throw err;
    console.log('connected to MongoDB')
});

// api endpoints
app.get('/', (req,res) => res.status(200).send('helloworld'));


 

//listen
app.listen(port, () => console.log(`listening on${process.env.NODE_ENV} localhost: ${port}`));