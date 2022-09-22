const { genSaltSync, compareSync, hashSync } = require('bcrypt');
const AuthModel = require('../Models/auth.model');
const { sign } = require('jsonwebtoken')

// module.exports = {
exports.signup = (req, res) => {
    let body = req.body;
    AuthModel.findUserByEmailOrPhone(body, (err, results) => {
        // if (err) {
        //     console.log(err);
        //     return res.status(500).json({
        //         success: 1,
        //         message: 'Error Signing up'
        //     });
        // }
        if (results) {
            return res.json({
                success: 0,
                data: "Email already exists"
            });
        }
        if (err) {
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
        }
    });
};

exports.signin = (req, res) => {
    const body = req.body;
    AuthModel.findUserByEmailOrPhone(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: 'Error Signing in'
            });
        }
        if (!results) {
            return res.json({
                success: 0,
                data: "Invalid email or password"
            });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
            results.password = undefined;
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
    });
};
// };

exports.checkEmailOrPhone = (req, res) => {
    const body = req.body;
    AuthModel.findUserByEmailOrPhone(body, (err, ans) => {
        if (err) {
            res.send(err);
        } else {
            /*
            if (ans.length != 0)
                res.send(true);
            else
                res.send(false)
            */
            res.send(ans);
        }
        console.log('Email Or Phone');
    })
};
