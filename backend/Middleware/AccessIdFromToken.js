const jwt = require("jsonwebtoken");
const { responce } = require("../utils/utils");
const val = new responce();
const AIFT = async (req, res, next) => {
         const AuthToken = req.header("auth-token");
    try {
         const data = jwt.verify(AuthToken, process.env.secure2);
        req.user = await data.user;
         next();
    } catch (error) {
        if (!AuthToken) {
            val.REST(res, false, 400, "please login or signin first");
        } else {
            val.REST(res, false, 500, "opps something went wrong please login again ");
        }
    }
   
};
module.exports = { AIFT };
