import express from 'express' 

import { getCitPosts, createCitPost, updateCitPost, deleteCitPost, countPost, getPostsBySearch } from '../controllers/citPost.js'

const router = express.Router()
import auth from '../middleware/auth.js'
import auth2 from '../middleware/auth2.js'

router.get('/search', getPostsBySearch)
router.get('/', getCitPosts);
router.post('/',auth, auth2, createCitPost);
router.patch('/:id', auth, auth2, updateCitPost);
router.delete('/:id', auth, auth2, deleteCitPost);
router.patch('/:id/countPost', countPost);

export default router;