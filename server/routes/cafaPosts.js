import express from 'express'

import { getCafaPosts, createCafaPost, updateCafaPost, deleteCafaPost, countPost, getPostsBySearch} from '../controllers/cafaPosts.js'

const router = express.Router()
import auth from '../middleware/auth.js'

router.get('/search',getPostsBySearch)
router.get('/', getCafaPosts)
router.post('/', auth, createCafaPost)
router.patch('/:id', auth, updateCafaPost)
router.delete('/:id', auth, deleteCafaPost)
router.patch('/:id/countPost', countPost)

export default router