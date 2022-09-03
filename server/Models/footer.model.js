const dbConn = require('../db.config');


var Footer = (footer) => {
    this.id = footer.id;
    this.category = footer.category;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Footer:
Footer.getAllFooter = (result) => {
    dbConn.query("SELECT * FROM footer", (err, res) => {
        if (err) {
            console.log('Error fetching Footer', err);
            result(null, err);
        } else {
            console.log('Success in fetching Footer');
            result(null, res);
        }
    })
}


// get Resources:

Footer.getFooterByParameter = (category, result) => {
    dbConn.query("SELECT * FROM footer WHERE category = ?", category, (err, res) => {
        if (err) {
            console.log('Error fetching Footer Elements', err);
            result(null, err);
        } else {
            console.log('Success in fetching Footer Elements');
            result(null, res);
        }
    })
}



module.exports = Footer;