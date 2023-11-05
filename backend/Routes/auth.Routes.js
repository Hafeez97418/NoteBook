const express = require("express");
const { AIFT } = require("../Middleware/AccessIdFromToken.js");
const { createUser, accessUser,fetchUser } = require("../controllers/auth.js");
const auth_router = express.Router(createUser);
const { body} = require("express-validator");

auth_router.route("/signup").post(
  [
    body("name", "enter a valid name ").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "the password should contain minimum 5 letters").isLength({
      min: 5,
    }),
  ],
  createUser
);
auth_router.route("/login").post(
   [
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password ").isLength({ min: 5 }),
  ],
  accessUser);

auth_router.route("/fetchuser").get(AIFT, fetchUser);
module.exports = { auth_router };
