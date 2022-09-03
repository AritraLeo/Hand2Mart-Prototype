const UsedBikesModel = require('../Models/usedBikes.model');


exports.getBikeByPriority = (req, res) => {
    UsedBikesModel.getAllBikes((err, bikes) => {
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
    UsedBikesModel.getBikeById(req.params.id, (err, bike) => {
        if (err) {
            res.send(err);
        } else {
            res.send(bike);
        }
    })
}