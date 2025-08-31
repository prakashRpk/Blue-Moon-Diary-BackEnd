const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({

  title: { 
    type: String, 
    required: true 
  },
  date:{
    type:String,
    require:true
  },
  time:{
    type:String,
    require:true
  },
  content: { 
    type: String, 
    required: true, 
  },
  pgcolor:{
    type:String,
  },
  mood:{
    type:String,
    required:true
  },
  tag:{
    type:String,
    required:true
  },
  location:{
    type:String
  },
  currentUserId:{
    type:mongoose.Schema.ObjectId,
    require:true
  }

}, { timestamps: true });

module.exports = mongoose.model('Note', NoteSchema);
