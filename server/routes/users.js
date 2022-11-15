import express from 'express';
import { createUser, deleteUser, readUsers, updateUser } from '../controller/users.js';



const router = express.Router()
 
router.get('/', readUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;