const dbConn = require('../db.config');


var NewBikes = (newBikes) => {
    this.id = newBikes.id;
    this.company_name = newBikes.company_name;
    this.model_No = newBikes.model_No;
    this.carName = newBikes.name;
    this.price = newBikes.price;
    this.fuel = newBikes.fuel;
    this.mileage = newBikes.mileage;
    this.transmission = newBikes.transmission;
    this.description = newBikes.description;
    this.image = newBikes.image;
    this.rating = newBikes.rating;
    this.status = newBikes.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
NewBikes.getAllBikes = (result) => {
    dbConn.query("SELECT * FROM new_bikes WHERE status = ? ORDER BY rating DESC", 1, (err, res) => {
        if (err) {
            console.log('Error fetching New Bikes', err);
            result(null, err);
        } else {
            console.log('Success in fetching New Bikes');
            result(null, res);
        }
    })
}

NewBikes.getBikeById = (id, result) => {
    dbConn.query("SELECT * FROM new_bikes WHERE id = ? AND status = 1", id, (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = NewBikes;