import express from 'express' 

import { getCitPosts, createCitPost, updateCitPost, deleteCitPost, countPost } from '../controllers/citPost.js'

const router = express.Router()
import auth from '../middleware/auth.js'

router.get('/', getCitPosts);
router.post('/',auth,  createCitPost);
router.patch('/:id', auth, updateCitPost);
router.delete('/:id', auth, deleteCitPost);
router.patch('/:id/countPost', countPost);

export default router;