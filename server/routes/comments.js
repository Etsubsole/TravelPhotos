import express from 'express';
import { createComment, deleteComment, readComments, updateComment } from '../controller/comments.js';



const router = express.Router()
 
router.get('/', readComments);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);
export default router;