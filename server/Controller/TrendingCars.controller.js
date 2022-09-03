const TrendingCarsModel = require('../Models/trendingCars.model');


exports.getCars = (req, res) => {
    TrendingCarsModel.getAllCars((err, cars) => {
        if (err) {
            res.send(err);
        } else {
            res.send(cars);
        }
        console.log('Hey!');
    })
    // console.log("All reviews");
}

exports.getCarById = (req, res) => {
    // console.log('Get Car by Id');
    TrendingCarsModel.getCarById(req.params.id, (err, car) => {
        if (err) {
            res.send(err);
        } else {
            res.send(car);
        }
    })
}