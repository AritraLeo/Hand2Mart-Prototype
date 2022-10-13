const UsedCarsModel = require('../Models/usedCars.model');
const UsedBikesModel = require('../Models/usedBikes.model');
const NewCarsModel = require('../Models/newCars.model');
const NewBikesModel = require('../Models/newBikes.model');
const DealerModel = require('../Models/dealer.model');
const UserModel = require('../Models/user.model');

exports.getListedCars = (req, res) => {
    var email = req.params.email;
    UsedCarsModel.getAllCarsBySeller(email, (err, cars) => {
        if (err) {
            res.send(err);
        } else {
            res.send(cars);
        }
        console.log('Hey!');
    });
}

exports.getListedCarById = (req, res) => {
    var id = req.params.id;
    var email = req.params.email;
    UsedCarsModel.getCarByIdAndBySeller([id, email], (err, car) => {
        if (err) {
            res.send(err);
        } else {
            res.send(car);
        }
        console.log('Hey!');
    })
}

exports.getListedBikes = (req, res) => {
    var email = req.params.email;
    UsedBikesModel.getAllBikesBySeller(email, (err, bikes) => {
        if (err) {
            res.send(err);
        } else {
            res.send(bikes);
        }
        console.log('Hey!');
    });
}


exports.getListedBikeById = (req, res) => {
    var id = req.params.id;
    var email = req.params.email;
    UsedBikesModel.getBikeByIdAndBySeller([id, email], (err, bike) => {
        if (err) {
            res.send(err);
        } else {
            res.send(bike);
        }
        console.log('Hey!');
    })
}


exports.buyCar = (req, res) => {
    var id = req.params.id;
    var type = req.params.type;
    var email = req.body.email;
    var addressCar = req.body.addressCar;
    var addressUser = req.body.addressUser;
    var body;
    if (type === 'dealer') {
        DealerModel.getCarById(id, (err, carDetails) => {
            if (err) {
                res.status(500).json({
                    success: 0,
                    message: 'No Car found!',
                });
            } else {
                body = {
                    name: carDetails[0].name,
                    email: carDetails[0].dealerEmail,
                    carId: carDetails[0].id,
                    carNumber: carDetails[0].carNumber,
                    price: carDetails[0].price,
                    image: carDetails[0].image,
                    addressUser: addressUser,
                    addressCar: addressCar,
                    userEmail: email,
                    type: type,
                }
                UserModel.buyCarSeller(body, (error, response) => {
                    if (error) {
                        res.status(500).json({
                    success: 0,
                    message: 'Purchase Unsuccessfull Error occured!',
                });
                    } else {   
                        res.status(200).json({
                            success: 1,
                            message: 'Purchase Successfull!',
                        });
                    }
                })
        }
        })
        console.log("Dealer Car");
    } else if (type === 'seller') {
        UsedCarsModel.getCarById(id, (err, carDetails) => {
            if (err) {
                res.status(500).json({
                    success: 0,
                    message: 'No Car found!',
                });
            } else {
                body = {
                    name: carDetails[0].name,
                    email: carDetails[0].email,
                    carId: carDetails[0].id,
                    carNumber: carDetails[0].carNumber,
                    price: carDetails[0].price,
                    image: carDetails[0].image,
                    addressUser: addressUser,
                    addressCar: addressCar,
                    userEmail: email,
                    type: type,
                }
                UserModel.buyCarSeller(body, (error, response) => {
                    if (error) {
                        res.status(500).json({
                            success: 0,
                            message: 'Purchase Unsuccessfull Error occured!',
                        });
                    } else {
                        res.status(200).json({
                            success: 1,
                            message: 'Purchase Successfull!',
                        });
                        
                    }
                })
            }
        });
        console.log("Seller Car");
    } else if(type === 'new'){
        NewCarsModel.getCarById(id, (err, carDetails) => {
            if (err) {
                res.status(500).json({
                    success: 0,
                    message: 'No Car found!',
                });
            } else {
                body = {
                    name: carDetails[0].name,
                    email: carDetails[0].email ? carDetails[0].email : carDetails[0].company_name,
                    carId: carDetails[0].id,
                    carNumber: carDetails[0].carNumber ? carDetails[0].carNumber : 'NEW CAR',
                    price: carDetails[0].price,
                    image: carDetails[0].image,
                    addressUser: addressUser,
                    addressCar: addressCar,
                    userEmail: email,
                    type: type,
                }
                UserModel.buyCarSeller(body, (error, response) => {
                    if (error) {
                        res.status(500).json({
                            success: 0,
                            message: 'Purchase Unsuccessfull Error occured!',
                        });
                    } else {
                        res.status(200).json({
                                success: 1,
                                message: 'Purchase Successfull!',
                            });
                        
                    }
                })
            }
        });
        console.log("New Car");
    }
    else {
        
        console.log("Car Not found");
    }
}





exports.buyBike = (req, res) => {
    var id = req.params.id;
    var type = req.params.type;
    var email = req.body.email;
    var addressBike = req.body.addressBike;
    var addressUser = req.body.addressUser;
    var body;
    if (type === 'dealer') {
        DealerModel.getBikeById(id, (err, bikeDetails) => {
            if (err) {
                res.status(500).json({
                    success: 0,
                    message: 'No Bike found!',
                });
            } else {
                body = {
                    name: bikeDetails[0].name,
                    email: bikeDetails[0].dealerEmail,
                    bikeId: bikeDetails[0].id,
                    bikeNumber: bikeDetails[0].bikeNumber,
                    price: bikeDetails[0].price,
                    image: bikeDetails[0].image,
                    addressUser: addressUser,
                    addressBike: addressBike,
                    userEmail: email,
                    type: type,
                }
                UserModel.buyBikeSeller(body, (error, response) => {
                    if (error) {
                        res.status(500).json({
                    success: 0,
                    message: 'Purchase Unsuccessfull Error occured!',
                });
                    } else {   
                        res.status(200).json({
                            success: 1,
                            message: 'Purchase Successfull!',
                        });
                    }
                })
        }
        })
        console.log("Dealer Bike");
    } else if (type === 'seller') {
        UsedBikesModel.getBikeById(id, (err, bikeDetails) => {
            if (err) {
                res.status(500).json({
                    success: 0,
                    message: 'No Bike found!',
                });
            } else {
                body = {
                    name: bikeDetails[0].name,
                    email: bikeDetails[0].email,
                    bikeId: bikeDetails[0].id,
                    bikeNumber: bikeDetails[0].bikeNumber,
                    price: bikeDetails[0].price,
                    image: bikeDetails[0].image,
                    addressUser: addressUser,
                    addressBike: addressBike,
                    userEmail: email,
                    type: type,
                }
                UserModel.buyBikeSeller(body, (error, response) => {
                    if (error) {
                        res.status(500).json({
                            success: 0,
                            message: 'Purchase Unsuccessfull Error occured!',
                        });
                    } else {
                        res.status(200).json({
                            success: 1,
                            message: 'Purchase Successfull!',
                        });
                        
                    }
                })
            }
        });
        console.log("Seller Bike");
    } else if(type === 'new'){
        NewBikesModel.getBikeById(id, (err, bikeDetails) => {
            if (err) {
                res.status(500).json({
                    success: 0,
                    message: 'No Bike found!',
                });
            } else {
                body = {
                    name: bikeDetails[0].name,
                    email: bikeDetails[0].email ? bikeDetails[0].email : bikeDetails[0].company_name,
                    bikeId: bikeDetails[0].id,
                    bikeNumber: bikeDetails[0].bikeNumber ? bikeDetails[0].bikeNumber : 'NEW BIKE',
                    price: bikeDetails[0].price,
                    image: bikeDetails[0].image,
                    addressUser: addressUser,
                    addressBike: addressBike,
                    userEmail: email,
                    type: type,
                }
                UserModel.buyBikeSeller(body, (error, response) => {
                    if (error) {
                        res.status(500).json({
                            success: 0,
                            message: 'Purchase Unsuccessfull Error occured!',
                        });
                    } else {
                        res.status(200).json({
                                success: 1,
                                message: 'Purchase Successfull!',
                            });
                        
                    }
                })
            }
        });
        console.log("New Bike");
    }
    else {
        
        console.log("Bike Not found");
    }
}


exports.sellCar =  (req, res) => {
    var email = req.params.email;
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
        email: email,
    }

    UsedCarsModel.sellCar(body, (err, car) => {
        if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching cars from sellers'
                })
            }
        else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the cars from sellers',
                    data: car,
                });
                // res.send(cars);
            }
            console.log('Seller Cars Inserted');
    })
}


exports.sellBike =  (req, res) => {
    var email = req.params.email;
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
        email: email,
    }

    UsedBikesModel.sellBike(body, (err, bike) => {
        if (err) {
                res.status(404).json({
                    success: 0,
                    message: 'Error fetching bike from sellers'
                })
            }
        else {
                res.status(200).json({
                    success: 1,
                    message: 'Fetching all the bike from sellers',
                    data: bike,
                });
                // res.send(cars);
            }
            console.log('Seller Bike Inserted');
    })
}