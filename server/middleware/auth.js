const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    // Get user from jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: 'Please authenticate using valid token' });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate using valid token' });
    }

}




// const jwt = require("jsonwebtoken");
// module.exports = {
//     checkToken: (req, res, next) => {
//         let token = req.get("authorization");
//         if (token) {
//             // Remove Bearer from string
//             token = token.slice(7);
//             jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
//                 if (err) {
//                     return res.json({
//                         success: 0,
//                         message: "Invalid Token..."
//                     });
//                 } else {
//                     req.decoded = decoded;
//                     next();
//                 }
//             });
//         } else {
//             return res.json({
//                 success: 0,
//                 message: "Access Denied! Unauthorized User"
//             });
//         }
//     }
// };





module.exports = auth;