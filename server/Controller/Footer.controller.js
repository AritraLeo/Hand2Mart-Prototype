const FooterModel = require('../Models/footer.model');


exports.getFooter = (req, res) => {
    FooterModel.getAllFooter((err, footer) => {
        if (err) {
            res.send(err);
        } else {
            res.send(footer);
        }
        console.log('We!!');
    })
    // console.log("All reviews");
}


exports.getFooterByParameter = (req, res) => {
    FooterModel.getFooterByParameter(req.params.cat, (err, resources) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resources);
        }
        console.log('We!!');
    })
}