const asyncHandler = require('express-async-handler')
const Order = require('../models/orders.Model')

const getOrders = asyncHandler(async(req, res) => {
  
  const order = await Order.find()
  
  res.status(200).json(order)

})

const postOrders = asyncHandler(async(req, res) => {

  if (!req.body.address) {
    res.status(400)
    throw new Error('la direccion es requerida ')
  }

  const order = await Order.create({
    address: req.body.address,
  })

    res.status(201).json(order)

})

const updateOrders = asyncHandler(async(req, res) => {

  const order = await Order.findById(req.params.id)

  if(!order) {
    res.status(404)
    throw new Error(`no existe el pedido con id: ${req.params.id}`)
  }

  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, ({ new: true }))
  res.status(200).json(updatedOrder)

})


const deleteOrders = asyncHandler(async(req, res) => {

  const order = await Order.findById(req.params.id)

  if(!order) {
    res.status(404)
    throw new Error(`no existe el pedido con id: ${req.params.id}`)
  }

  const deleteOrder = await Order.findByIdAndDelete(req.params.id)
  res.status(200).json({id: order._id})


})


module.exports = {
  getOrders,
  postOrders,
  updateOrders,
  deleteOrders
}
