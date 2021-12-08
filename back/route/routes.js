import express from "express";
import { getUsers, addUser, deleteUser, getUserById, editUser, registerUser, loginUser} from "../controller/user-controller.js";

const router = express.Router();

router.get('/', getUsers)
router.post('/add', addUser)
router.delete('/:id', deleteUser)
router.put('/:id', editUser);
router.get('/:id', getUserById);

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router;