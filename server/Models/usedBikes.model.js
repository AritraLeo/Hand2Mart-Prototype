const dbConn = require('../db.config');


var UsedBikes = (usedBikes) => {
    this.id = usedBikes.id;
    this.carName = usedBikes.name;
    this.transmission = usedBikes.transmission;
    this.ownerType = usedBikes.ownerType;
    this.fuel = usedBikes.fuel;
    this.price = usedBikes.price;
    this.image = usedBikes.image;
    this.registration = usedBikes.registration;
    this.manufactured_at = usedBikes.manufactured_at;
    this.kms = usedBikes.kms;
    this.mileage = usedBikes.mileage;
    this.description = usedBikes.description;
    this.modelNumber = usedBikes.modelNumber;
    this.insurance_status = usedBikes.insurance_status;
    this.insurance_upto = usedBikes.insurance_upto;
    this.rating = usedBikes.rating;
    this.status = usedBikes.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
UsedBikes.getAllBikes = (result) => {
    dbConn.query("SELECT * FROM used_bikes WHERE status = ? ORDER BY rating DESC", 1, (err, res) => {
        if (err) {
            console.log('Error fetching Used Cars', err);
            result(null, err);
        } else {
            console.log('Success in fetching Used Cars');
            result(null, res);
        }
    })
}

UsedBikes.getBikeById = (id, result) => {
    dbConn.query("SELECT * FROM used_bikes WHERE id = ? AND status = 1", id, (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = UsedBikes;