const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/User');


module.exports.CreateUser = async (req, res) => {
  const { name, gmail, password, phoneNo } = req.body;

  try {
    // Validation: Check if all required fields are present
    if (!name || !gmail || !phoneNo || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ gmail });
    if (userExist) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      gmail,
      password: hashedPassword,
      phoneNo,
      date: new Date().toDateString(),
      bgColorList: ["lightgreen", "lightblue"],
      moodList: ["happy", "sad", "heart break"],
      tagList: ["work", "personal", "home"]
    });
    
    await user.save();

    // Return the complete user object including the hashed password
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: user, // This includes the hashed password
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};


module.exports.GetUser = async (req, res) => {
  try {
    // ✅ Populate role name in response
    const Users = await User.find()
      .sort({ createdAt: -1 });

    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

module.exports.UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gmail, phoneNo, password } = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }


    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }


    if (name) user.firstname = firstname;
    if (gmail) user.gmail = gmail;
    if (phoneNo) user.phoneNo = phoneNo;


    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }


    await user.save();


    const { password: _, ...updatedUser } = user.toObject();

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user: updatedUser,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};
