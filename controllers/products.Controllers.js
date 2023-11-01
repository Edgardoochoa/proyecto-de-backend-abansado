const asyncHandler = require('express-async-handler')
const Product = require('../models/products.Model')

const getProducts = asyncHandler(async (req, res) => {

  const product = await Product.find({user: req.user.id})

  res.status(200).json(product)
})

const postProducts = asyncHandler(async (req, res) => {

  if (!req.body.productName || !req.body.price) {
    res.status(400)
    throw new Error('faltan datos')
  }

  const product = await Product.create({
    productName: req.body.productName,
    price: req.body.price,
    user: req.user.id
  })
    res.status(201).json(product)
})

const updateProducts = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('el producto no fué encontrado')
  }

  //verificar que la tarea pertenesca al usuario logiado
  if (product.user.toString()!== req.user.id) {
    res.status(401)
    throw new Error('No tienes permisos para actualizar este producto')
  } else {
    
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedProduct)

  }

})

const deleteProducts = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id)

  if (!product) {
    res.status(404)
    throw new Error('el producto no fué encontrado')
  }

  //verificar que la tarea pertenesca al usuario logiado
  if (product.user.toString()!== req.user.id) {
    res.status(401)
    throw new Error('No tienes permisos para eliminar este producto')
  } else {
    const deleteProducts = await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({ id: product._id })
  }
  

})

module.exports = {
  getProducts,
  postProducts,
  updateProducts,
  deleteProducts
}