const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

module.exports.login = async (req, res) => {
  const { gmail, password } = req.body;

  try {

    if (!gmail || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }


    const existingUser = await User.findOne({ gmail });
    if (!existingUser) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }


    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }


    const token = jwt.sign(
      {
        id: existingUser._id,
        gmail: existingUser.gmail,
      },
      process.env.JWT_SECRET || 'defaultsecret',
      { expiresIn: '1d' }
    );


    res.json({
      success: true,
      message: 'Login success',
      token,
      user: {
        id: existingUser._id,
        gmail: existingUser.gmail,
      },
    });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
};
