const express = require('express')
const { getCars , getSingleCar} = require('./src/cars')

const app = express()

app.get('/hello', (req, res) => {
    res.send('hello browser')
    console.log('hello terminal')
})

app.get('/cars/:carID', getSingleCar)
app.get('/cars', getCars)



app.listen(3000, () => {
    console.log('listening on http://localhost:3000')
})