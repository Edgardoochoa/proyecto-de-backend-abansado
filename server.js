const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/error.Middleware')
const connectDB = require('./config/bd')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/products', require('./routes/products.Routes'))
app.use('/api/orders', require('./routes/orders.Routes'))
app.use('/api/users', require('./routes/users.Routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))