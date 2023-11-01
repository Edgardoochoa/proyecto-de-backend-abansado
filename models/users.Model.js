const mongoose = require('mongoose')

const userShema = mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'El nombre es requerido']
  },
  email: {
    type: String,
    required: [true, 'El correo es requerido'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es requerida']
  
  }
},{
  timestamps: true
})


module.exports = mongoose.model('User', userShema)
