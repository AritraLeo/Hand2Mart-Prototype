const DealerModel = require('../Models/dealer.model');


exports.getAllCars = (req, res) => {
        DealerModel.getAllCars((err, cars) => {
            if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching cars from dealers'
                })
            }
            else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the cars from dealers',
                    data: cars,
                });
                // res.send(cars);
            }
            console.log('All Dealer Cars');
        })
    }
// };


exports.getCarByDealer = (req, res) => {
    var DealerEmail = req.params.email;
        DealerModel.getCarByDealer(DealerEmail, (err, cars) => {
            if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching cars from dealers'
                })
            }
            else if (cars.length == 0) {
                res.status(200).json({
                    success: 0,
                    message: "No albums with this dealer's email",
                    // data: cars,
                });
            }
            else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the cars from dealers',
                    data: cars,
                });
                // res.send(cars);
            }
            console.log('Dealer Cars Album by dealer');
        })
}



exports.getAllBikes = (req, res) => {
        DealerModel.getAllBikes((err, bikes) => {
            if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching bikes from dealers'
                })
            }
            else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the bikes from dealers',
                    data: bikes,
                });
                // res.send(cars);
            }
            console.log('All Dealer Bikes');
        })
}
    

exports.getBikeByDealer = (req, res) => {
    var DealerEmail = req.params.email;
        DealerModel.getBikeByDealer(DealerEmail, (err, bikes) => {
            if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching bikes from dealers'
                })
            }
            else if (bikes.length == 0) {
                res.status(200).json({
                    success: 0,
                    message: "No albums with this dealer's email",
                    // data: cars,
                });
            }
            else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the bikes from dealers',
                    data: bikes,
                });
                // res.send(cars);
            }
            console.log('Dealer Bikes Album by dealer');
        })
}


exports.sellCar = (req, res) => {
    var DealerEmail = req.params.email;
    var body;
    body = {
        name: req.body.name,
        transmission: req.body.transmission,
        ownerType: req.body.ownerType,
        fuel: req.body.fuel,
        price: req.body.price,
        image: req.body.image,
        registration: req.body.registration,
        manufactured_at: req.body.manufactured_at,
        kms: req.body.kms,
        mileage: req.body.mileage,
        description: req.body.description,
        modelNumber: req.body.modelNumber,
        carNumber: req.body.carNumber,
        insurance_status: req.body.insurance_status,
        insurance_upto: req.body.insurance_upto,
        email: DealerEmail,
    }
    DealerModel.sellCar(body, (err, car) => {
        if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching bikes from dealers'
                })
            }
        else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the bikes from dealers',
                    data: car,
                });
                // res.send(cars);
            }
            console.log('Dealer Cars Inserted');
    })
}




exports.sellBike = (req, res) => {
    var DealerEmail = req.params.email;
    var body;
    body = {
        name: req.body.name,
        transmission: req.body.transmission,
        ownerType: req.body.ownerType,
        fuel: req.body.fuel,
        price: req.body.price,
        image: req.body.image,
        registration: req.body.registration,
        manufactured_at: req.body.manufactured_at,
        kms: req.body.kms,
        mileage: req.body.mileage,
        description: req.body.description,
        modelNumber: req.body.modelNumber,
        bikeNumber: req.body.bikeNumber,
        insurance_status: req.body.insurance_status,
        insurance_upto: req.body.insurance_upto,
        email: DealerEmail,
    }
    DealerModel.sellBike(body, (err, bike) => {
        if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching bikes from dealers'
                })
            }
        else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the bikes from dealers',
                    data: bike,
                });
                // res.send(cars);
            }
            console.log('Dealer Bikes Inserted');
    })
}