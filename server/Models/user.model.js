const dbConn = require('../db.config');


var SoldCars = (soldCars) => {
    this.id = soldCars.id;
    this.name = soldCars.name;
    this.email = soldCars.email;
    this.carId = soldCars.carId;
    this.carNumber = soldCars.carNumber;
    this.price = soldCars.price;
    this.image = soldCars.image;
    this.created_at = new Date();
    this.modified_at = new Date();
}

var SoldBikes = (soldBikes) => {
    this.id = soldBikes.id;
    this.name = soldBikes.name;
    this.email = soldBikes.email;
    this.carId = soldBikes.bikeId;
    this.carNumber = soldBikes.bikeNumber;
    this.price = soldBikes.price;
    this.image = soldBikes.image;
    this.created_at = new Date();
    this.modified_at = new Date();
}

SoldCars.buyCarSeller = (body, result) => {
    // var { name, email, carId, carNumber, price, image } = body;
    console.log(body.name);
    dbConn.query("INSERT INTO master_sold_cars (name, email, carId, carNumber, price, image, addressUser, addressCar, userEmail, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [body.name, body.email, body.carId, body.carNumber, body.price, body.image, body.addressUser, body.addressCar, body.userEmail, body.type], (err, res) => {
        if (err) {
            console.log('Error purchasing the Cars', err);
            result(null, err);
        } else {
            console.log('Car purchase succesfull !', res);
            result(null, res);
        }
    })
} 


SoldBikes.buyBikeSeller = (body, result) => {
    console.log(body.name);
    dbConn.query("INSERT INTO master_sold_bikes (name, email, bikeId, bikeNumber, price, image, addressUser, addressBike, userEmail, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [body.name, body.email, body.bikeId, body.bikeNumber, body.price, body.image, body.addressUser, body.addressBike, body.userEmail, body.type], (err, res) => {
        if (err) {
            console.log('Error purchasing the Cars', err);
            result(null, err);
        } else {
            console.log('Car purchase succesfull !', res);
            result(null, res);
        }
    })
}







module.exports = SoldCars;
module.exports = SoldBikes;

