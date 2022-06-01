import  express  from "express";

import {getCoorPosts, createCoorPost, updateCoorPost, deleteCoorPost} from "../controllers/coorPost.js"; 

const router = express.Router()

import auth from "../middleware/auth.js";

router.get('/', getCoorPosts);
router.post('/', auth, createCoorPost);
router.patch('/:id', auth, updateCoorPost);
router.delete('/:id',auth, deleteCoorPost);

export default router;