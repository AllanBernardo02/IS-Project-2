import express from 'express' 

import { getClaPosts, createClaPost, updateClaPost, deleteClaPost, countPost, getPostsBySearch } from '../controllers/claPosts.js'

const router = express.Router()
import auth from '../middleware/auth.js'
import auth2 from '../middleware/auth2.js'

router.get('/search', getPostsBySearch)
router.get('/', getClaPosts);
router.post('/',auth, auth2, createClaPost);
router.patch('/:id', auth, auth2, updateClaPost);
router.delete('/:id', auth, auth2, deleteClaPost);
router.patch('/:id/countPost', countPost);

export default router;