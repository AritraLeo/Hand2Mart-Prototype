const NewCarsModel = require('../Models/newCars.model');


exports.getCarByTrend = (req, res) => {
    NewCarsModel.getAllCars((err, cars) => {
        if (err) {
            res.send(err);
        } else {
            res.send(cars);
        }
        console.log('Hey!');
    })
}




exports.getCarById = (req, res) => {
    // console.log('Get Car by Id');
    NewCarsModel.getCarById(req.params.id, (err, car) => {
        if (err) {
            res.send(err);
        } else {
            res.send(car);
        }
    })
}