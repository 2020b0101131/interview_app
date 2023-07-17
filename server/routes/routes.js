import express, { Router } from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser, registerUser, loginUser, userProfile } from '../controller/UserController.js';


const router = express.Router();
router.post('/adduser', addUser)
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser)
router.delete('/:id', deleteUser)
router.post('/registeruser', registerUser)
router.post('/loginuser', loginUser)
router.get('/userprofile', userProfile)
export default router;