const dbConn = require('../db.config');


var TrendingCars = (trendingCar) => {
    this.id = trendingCar.id;
    this.carName = trendingCar.carName;
    this.price = trendingCar.price;
    this.kms = trendingCar.kms;
    this.mileage = trendingCar.mileage;
    this.image = trendingCar.image;
    this.transmission = trendingCar.transmission;
    this.fuel = trendingCar.fuel;
    this.status = trendingCar.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
TrendingCars.getAllCars = (result) => {
    dbConn.query("SELECT * FROM trending_cars WHERE status = ? ORDER BY rating DESC", 1, (err, res) => {
        if (err) {
            console.log('Error fetching Trending Cars', err);
            result(null, err);
        } else {
            console.log('Success in fetching Trending Cars');
            result(null, res);
        }
    })
}

TrendingCars.getCarById = (id, result) => {
    dbConn.query("SELECT * FROM trending_cars WHERE id = ? AND status = 1", id, (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = TrendingCars;