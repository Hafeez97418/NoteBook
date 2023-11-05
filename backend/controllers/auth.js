const User_model = require("../models/user.js");
const { responce } = require("../utils/utils.js");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const val = new responce();

const createUser = async (req, res, next) => {
  let { name, email, password } = req.body;
  console.log(req.body);
  const result = validationResult(req);
  val.utils_check(async () => {
    if (result.isEmpty()) {
      let check = await User_model.findOne({ email });
      check = check !== null ? check : false;
      if (check.email !== email) {
        let salt = await bcrypt.genSalt(process.env.fireSaltRounds);
        let securePassword = await bcrypt.hash(password, salt);
        return await User_model.create({
          name,
          email,
          password: securePassword,
        }).then((user) => {
          val.create_jwt(res, user, process.env.secure2, "you are signed in ");
        });
      } else {
        val.REST(res, false, 400, "user already exists");
      }
    } else {
      val.REST(res, false, 400, result.errors[0].msg);
    }
  });
};

const accessUser = (req, res, next) => {
  let { email, password } = req.body;
  const result = validationResult(req);
  val.utils_check(async () => {
    if (result.isEmpty()) {
      let got_user = await User_model.findOne({ email });
      if (got_user == null) {
        val.REST(
          res,
          false,
          404,
          "user not found please enter the valid credentials"
        );
      } else {
        const find = await bcrypt.compare(password, got_user.password);
        if (find === true) {
          password = got_user.password;
          val.create_jwt(
            res,
            got_user,
            process.env.secure2,
            "you are logged in "
          );
        } else if (password !== got_user.password) {
          val.REST(res, false, 400, "incorrect password please try again");
        }
      }
    } else {
      val.REST(res, false, 400, result.errors[0].msg);
    }
  });
};

const fetchUser = (req, res, next) => {
  val.utils_check(async () => {
    let userId = await req.user.id;
    const user = await User_model.findById(userId).select("-password");
    val.REST(res, true, 200, "Hello user", user);
  });
};

module.exports = { createUser, accessUser, fetchUser };