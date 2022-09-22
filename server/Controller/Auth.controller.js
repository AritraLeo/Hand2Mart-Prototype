const { genSaltSync, compareSync, hashSync } = require('bcrypt');
const AuthModel = require('../Models/auth.model');
const { sign } = require('jsonwebtoken')

// module.exports = {
exports.signup = (req, res) => {
    let body = req.body;
    AuthModel.findUserByEmailOrPhone(body, (err, ans) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Error Signing up'
            });
        }
        else {
            
            if (ans.length != 0) {
                return res.status(402).json({
                    success: 0,
                    data: "User with this email already exists"
                });
            }
            // if (results) {
            //     return res.json({
            //         success: 0,
            //         data: "Email already exists"
            //     });
            // }
            else {
                
                // if (err) {
                    const salt = genSaltSync(12);
                    body.password = hashSync(body.password, salt);
                AuthModel.signup(body, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'Error Signing up'
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        data: results
                        });
                    })
                // }
            }
        }
    });
    console.log("Sign up");
};

exports.signin = (req, res) => {
    const body = req.body;
    var emailCheck = false;
    AuthModel.findUserByEmailOrPhone(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Error Signing in'
            });
        }
        
        else {
            
            if (results.length == 0) {
                return res.status(402).json({
                success: 0,
                data: "USer with this email doesn't exists"
            });
                emailCheck = false;
                // res.send(true);
            }
            else {
                emailCheck = true;
                // res.send(false)
                // console.log(results[0].password);
            
            // res.send(ans);
        // if () {
        //     return res.json({
        //         success: 0,
        //         data: "Invalid email or password"
        //     });
        // }
                
                
                
        const result = compareSync(body.password, results[0].password);
        // console.log(result);
        if (result) {
            results[0].password = null;
            const jsontoken = sign({ result: results }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_DURATION
            });
            return res.json({
                success: 1,
                message: "login successfully",
                token: jsontoken
            });
        } else {
            return res.json({
                success: 0,
                data: "Invalid email or password"
            });
            }
        }
        }
    });
};
// };


