import express from 'express'

import { getCoePosts, createCoePost, updateCoePost, deleteCoePost, countPost } from '../controllers/coePosts.js'

const router = express.Router()
import auth from '../middleware/auth.js'

router.get('/', getCoePosts);
router.post('/',auth,  createCoePost);
router.patch('/:id', auth, updateCoePost);
router.delete('/:id', auth, deleteCoePost);
router.patch('/:id/countPost', countPost);

export default router;