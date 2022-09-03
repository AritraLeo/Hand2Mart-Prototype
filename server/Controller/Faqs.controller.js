const FaqsModel = require('../Models/faqs.model');


exports.getFaqs = (req, res) => {
    FaqsModel.getAllFaqs((err, faq) => {
        if (err) {
            res.send(err);
        } else {
            res.send(faq);
        }
        console.log('We!!');
    })
    // console.log("All reviews");
}