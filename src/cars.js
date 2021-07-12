const cars = [{
    make: 'Audi',
    model: 'A3',
    year: 2018
}, {
    make: 'Mazda',
    model: 'Miata',
    year: 1992
}, {
    make: 'Ford',
    model: 'Mustang',
    year: 2001
}]

exports.getCars = (req, res) => {
    res.send(cars)
}

exports.getSingleCar = (req, res) => {
    const { carID } = req.params
    res.send(cars[carID])
}