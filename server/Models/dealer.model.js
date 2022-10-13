const dbConn = require('../db.config');


var Dealer = (dealerCars) => {
    this.id = dealerCars.id;
    this.carName = dealerCars.name;
    this.transmission = dealerCars.transmission;
    this.ownerType = dealerCars.ownerType;
    this.fuel = dealerCars.fuel;
    this.price = dealerCars.price;
    this.image = dealerCars.image;
    this.registration = dealerCars.registration;
    this.manufactured_at = dealerCars.manufactured_at;
    this.kms = dealerCars.kms;
    this.mileage = dealerCars.mileage;
    this.description = dealerCars.description;
    this.modelNumber = dealerCars.modelNumber;
    this.insurance_status = dealerCars.insurance_status;
    this.insurance_upto = dealerCars.insurance_upto;
    this.rating = dealerCars.rating;
    this.status = dealerCars.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


var DealerBikes = (dealerBikes) => {
    this.id = dealerBikes.id;
    this.carName = dealerBikes.name;
    this.transmission = dealerBikes.transmission;
    this.ownerType = dealerBikes.ownerType;
    this.fuel = dealerBikes.fuel;
    this.price = dealerBikes.price;
    this.image = dealerBikes.image;
    this.registration = dealerBikes.registration;
    this.manufactured_at = dealerBikes.manufactured_at;
    this.kms = dealerBikes.kms;
    this.mileage = dealerBikes.mileage;
    this.description = dealerBikes.description;
    this.modelNumber = dealerBikes.modelNumber;
    this.insurance_status = dealerBikes.insurance_status;
    this.insurance_upto = dealerBikes.insurance_upto;
    this.rating = dealerBikes.rating;
    this.status = dealerBikes.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}



Dealer.getAllCars = (result) => {
    dbConn.query("SELECT * FROM master_dealer_cars WHERE status = ?", 1, (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}


Dealer.getAllBikes = (result) => {
    dbConn.query("SELECT * FROM master_dealer_bikes WHERE status = ?", 1, (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}


Dealer.getCarByDealer = (DealerEmail, result) => {
    dbConn.query("SELECT * FROM master_dealer_cars WHERE status = ? AND dealerEmail = ?", [1, DealerEmail], (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}


Dealer.getCarById = (id, result) => {
    dbConn.query("SELECT * FROM master_dealer_cars WHERE status = ? AND id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}


Dealer.getBikeById = (id, result) => {
    dbConn.query("SELECT * FROM master_dealer_bikes WHERE status = ? AND id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}




Dealer.getBikeByDealer = (DealerEmail, result) => {
    dbConn.query("SELECT * FROM master_dealer_bikes WHERE status = ? AND dealerEmail = ?", [1, DealerEmail], (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}


Dealer.sellCar = (body, result) => {

    const { name, transmission, ownerType, fuel, price, image, registration, manufactured_at, kms, mileage, description, modelNumber, carNumber, insurance_status, insurance_upto, email} = body;

    dbConn.query("INSERT INTO master_dealer_cars (name, transmission, ownerType, fuel, price, image, registration, manufactured_at, kms, mileage, description, modelNumber, carNumber, insurance_status, insurance_upto, dealerEmail, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, transmission, ownerType, fuel, price, image, registration, manufactured_at, kms, mileage, description, modelNumber, carNumber, insurance_status, insurance_upto, email, 1], (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}


Dealer.sellBike = (body, result) => {

    const { name, transmission, ownerType, fuel, price, image, registration, manufactured_at, kms, mileage, description, modelNumber, bikeNumber, insurance_status, insurance_upto, email} = body;

    dbConn.query("INSERT INTO master_dealer_bikes (name, transmission, ownerType, fuel, price, image, registration, manufactured_at, kms, mileage, description, modelNumber, bikeNumber, insurance_status, insurance_upto, dealerEmail, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, transmission, ownerType, fuel, price, image, registration, manufactured_at, kms, mileage, description, modelNumber, bikeNumber, insurance_status, insurance_upto, email, 1], (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}



module.exports = Dealer
