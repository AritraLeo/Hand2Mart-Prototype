const TrendingBikesModel = require('../Models/trendingBikes.model');


exports.getBikes = (req, res) => {
    TrendingBikesModel.getAllBikes((err, reviews) => {
        if (err) {
            res.send(err);
        } else {
            res.send(reviews);
        }
        console.log('Hi!');
    })
    // console.log("All reviews");
}

exports.getBikeById = (req, res) => {
    // console.log('Get Car by Id');
    TrendingBikesModel.getBikeById(req.params.id, (err, bike) => {
        if (err) {
            res.send(err);
        } else {
            res.send(bike);
        }
    })
}