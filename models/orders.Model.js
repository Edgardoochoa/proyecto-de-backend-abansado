const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  address:{
    type: String,
    required: [true, 'la direccion es requerida']
  }
},{
  timestamps: true
})


module.exports = mongoose.model('Order', orderSchema)