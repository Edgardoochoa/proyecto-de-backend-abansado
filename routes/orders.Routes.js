const express = require('express')
const router = express.Router()
const { getOrders, postOrders, updateOrders, deleteOrders } = require('../controllers/orders.Controllers')

router.get('/', getOrders)
router.post('/', postOrders)

router.put('/:id', updateOrders)
router.delete('/:id', deleteOrders)

module.exports = router