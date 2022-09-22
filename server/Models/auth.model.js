const dbConn = require('../db.config');


var Auth = (auth) => {
    this.id = auth.id;
    this.name = auth.name;
    this.email = auth.email;
    this.phone = auth.phone;
    this.password = auth.password;
    this.address = auth.address;
    this.status = auth.status;
    this.created_at = new Date();
    this.modified_at = new Date();
    this.profileImage = auth.profileImage;
    this.customer_interests = auth.customer_interests;
}


// get Reviews:
Auth.getAllUsers = (result) => {
    dbConn.query("SELECT * FROM master_users WHERE status = ?", 1, (err, res) => {
        if (err) {
            console.log('Error fetching All Users', err);
            result(null, err);
        } else {
            console.log('Success in fetching All Users');
            result(null, res);
        }
    })
}

Auth.getUserById = (id, result) => {
    dbConn.query("SELECT * FROM master_users WHERE id = ? AND status = ?", [id, 1], (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


Auth.signup = (body, result) => {
    const { name, email, phone, password, address, profileImg, customer_interests } = body;
    dbConn.query("INSERT INTO master_users (name, email, phone, password, address, status, profileImg, customer_interests) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [name, email, phone, password, address, 1, profileImg, customer_interests], (err, res) => {
        if (err) {
            console.log("Error Signup failed!", err);
            result(null, err);
        } else {
            console.log("Hi"+name+"happy to have you with us!");
            result(null, res);
        }
    })
}

Auth.findUserByEmailOrPhone = (body, result) => {
    // const { email, phone } = body;
    dbConn.query("SELECT * FROM master_users WHERE email = ? OR phone = ? LIMIT 1", [body.email, body.phone], (err, res, fields) => {
        if (err) {
            console.log("No user with this email or phone");
            result(null, err)
        } else {
            console.log("Finder model");
            result(null, res);
        }
    })
}



// Auth.signin = 


module.exports = Auth;