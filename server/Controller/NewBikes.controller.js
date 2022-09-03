const NewBikesModel = require('../Models/newBikes.model');


exports.getBikeByTrend = (req, res) => {
    NewBikesModel.getAllBikes((err, bikes) => {
        if (err) {
            res.send(err);
        } else {
            res.send(bikes);
        }
        console.log('Hey!');
    })
}




exports.getBikeById = (req, res) => {
    // console.log('Get Car by Id');
    NewBikesModel.getBikeById(req.params.id, (err, bike) => {
        if (err) {
            res.send(err);
        } else {
            res.send(bike);
        }
    })
}