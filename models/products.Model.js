const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El usuario es requerido']
  },
  productName: {
      type: String,
      required: [true, 'el nombre del producto es requerido']
  },
  price:{
    type: Number,
    required: [true, 'el precio es requerido']
  }, 
  
},{
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)