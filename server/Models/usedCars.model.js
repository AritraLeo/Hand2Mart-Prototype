const dbConn = require('../db.config');


var UsedCars = (usedCars) => {
    this.id = usedCars.id;
    this.carName = usedCars.name;
    this.transmission = usedCars.transmission;
    this.ownerType = usedCars.ownerType;
    this.fuel = usedCars.fuel;
    this.price = usedCars.price;
    this.image = usedCars.image;
    this.registration = usedCars.registration;
    this.manufactured_at = usedCars.manufactured_at;
    this.kms = usedCars.kms;
    this.mileage = usedCars.mileage;
    this.description = usedCars.description;
    this.modelNumber = usedCars.modelNumber;
    this.insurance_status = usedCars.insurance_status;
    this.insurance_upto = usedCars.insurance_upto;
    this.rating = usedCars.rating;
    this.status = usedCars.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
UsedCars.getAllCars = (result) => {
    dbConn.query("SELECT * FROM used_cars WHERE status = ? ORDER BY rating DESC", 1, (err, res) => {
        if (err) {
            console.log('Error fetching Used Cars', err);
            result(null, err);
        } else {
            console.log('Success in fetching Used Cars');
            result(null, res);
        }
    })
}

UsedCars.getCarById = (id, result) => {
    dbConn.query("SELECT * FROM used_cars WHERE id = ? AND status = 1", id, (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = UsedCars;