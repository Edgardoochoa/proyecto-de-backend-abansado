const express = require('express')
const router = express.Router()
const { getProducts, postProducts, updateProducts, deleteProducts } = require('../controllers/products.Controllers')
const { protect } = require('../middleware/auth.Middleware')


router.get('/', protect, getProducts)
router.post('/', protect, postProducts)

router.put('/:id', protect, updateProducts)
router.delete('/:id', protect, deleteProducts)

module.exports = router