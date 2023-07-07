const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register a new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password: ", hashedPassword);

  // create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created: ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
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
