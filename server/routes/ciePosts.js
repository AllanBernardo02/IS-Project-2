import express from 'express' 

import { getCiePosts, createCiePost, updateCiePost, deleteCiePost, countPost, getPostsBySearch  } from '../controllers/ciePosts.js'

const router = express.Router()
import auth from '../middleware/auth.js'
import auth2 from '../middleware/auth2.js'

router.get('/search', getPostsBySearch)
router.get('/', getCiePosts);
router.post('/',auth, auth2, createCiePost);
router.patch('/:id', auth, auth2, updateCiePost);
router.delete('/:id', auth, auth2, deleteCiePost);
router.patch('/:id/countPost', countPost);

export default router;