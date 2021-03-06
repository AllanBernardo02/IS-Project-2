import express from 'express'

import { getCosPosts, createCosPost, updateCosPost, deleteCosPost, countPost, getPostsBySearch} from '../controllers/cosPosts.js'

const router = express.Router()
import auth from '../middleware/auth.js'

router.get('/search',getPostsBySearch)
router.get('/', getCosPosts)
router.post('/', auth, createCosPost)
router.patch('/:id', auth, updateCosPost)
router.delete('/:id', auth, deleteCosPost)
router.patch('/:id/countPost', countPost)

export default router