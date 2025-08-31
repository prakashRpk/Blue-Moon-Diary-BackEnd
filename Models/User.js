const { request } = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: { 
    type: String, 
    required: true 
  },

  gmail: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },

  phoneNo: { 
    type: String, 
    required: true,
    minlength: 10,
    maxlength: 10
  },

  password: { 
    type: String, 
    required: true,
    minlength: 5
  },

  date:{
    type:String,
    required:true
  },

  bgColorList:{
    type:Array,
    request:true
  },

  moodList:{
    type:Array,
    request:true
  },

  tagList:{
    type:Array,
    request:true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
