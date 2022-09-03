const UsedCarsModel = require('../Models/usedCars.model');


exports.getCarByPriority = (req, res) => {
    UsedCarsModel.getAllCars((err, cars) => {
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
    UsedCarsModel.getCarById(req.params.id, (err, car) => {
        if (err) {
            res.send(err);
        } else {
            res.send(car);
        }
    })
}