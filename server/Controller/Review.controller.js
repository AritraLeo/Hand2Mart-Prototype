const ReviewModel = require('../Models/reviews.model');


exports.getReviews = (req, res) => {
    ReviewModel.getAllReviews((err, reviews) => {
        if (err) {
            res.send(err);
        } else {
            res.send(reviews);
        }
        console.log('We!!');
    })
    // console.log("All reviews");
}