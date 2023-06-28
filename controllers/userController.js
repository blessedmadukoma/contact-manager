const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register this user" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login this user" });
});

//@desc Current user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};