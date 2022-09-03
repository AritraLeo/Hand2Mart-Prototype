const dbConn = require('../db.config');


var Review = (review) => {
    this.id = review.id;
    this.review_text = review.review_text;
    this.name = review.name;
    this.image = review.image;
    this.stars = review.stars;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
Review.getAllReviews = (result) => {
    dbConn.query("SELECT * FROM reviews", (err, res) => {
        if (err) {
            console.log('Error fetching Reviews', err);
            result(null, err);
        } else {
            console.log('Success in fetching reviews');
            result(null, res);
        }
    })
}

module.exports = Review;