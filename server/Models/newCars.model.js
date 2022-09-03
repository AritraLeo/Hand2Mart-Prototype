const dbConn = require('../db.config');


var NewCars = (newCars) => {
    this.id = newCars.id;
    this.company_name = newCars.company_name;
    this.model_No = newCars.model_No;
    this.carName = newCars.name;
    this.price = newCars.price;
    this.fuel = newCars.fuel;
    this.mileage = newCars.mileage;
    this.transmission = newCars.transmission;
    this.description = newCars.description;
    this.image = newCars.image;
    this.rating = newCars.rating;
    this.status = newCars.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
NewCars.getAllCars = (result) => {
    dbConn.query("SELECT * FROM new_cars WHERE status = ? ORDER BY rating DESC", 1, (err, res) => {
        if (err) {
            console.log('Error fetching New Cars', err);
            result(null, err);
        } else {
            console.log('Success in fetching New Cars');
            result(null, res);
        }
    })
}

NewCars.getCarById = (id, result) => {
    dbConn.query("SELECT * FROM new_cars WHERE id = ? AND status = 1", id, (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = NewCars;