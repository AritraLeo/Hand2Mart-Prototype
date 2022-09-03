const dbConn = require('../db.config');


var Faq = (faq) => {
    this.id = faq.id;
    this.title = faq.title;
    this.answer = faq.answer;
    this.preference = faq.preference;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
Faq.getAllFaqs = (result) => {
    dbConn.query("SELECT * FROM faqs ORDER BY preference DESC", (err, res) => {
        if (err) {
            console.log('Error fetching Faqs', err);
            result(null, err);
        } else {
            console.log('Success in fetching Faqs');
            result(null, res);
        }
    })
}

module.exports = Faq;