var express=require('express');
var mongoose=require('mongoose');
var app=express();
var cors=require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "prakash_secret"; // keep this safe

app.use(cors());
app.use(express.json());


//create a root path
app.get('/',(req,res)=>{res.send("welcome")})

//open the port
app.listen(5000,()=>{console.log("Server Connected")});

//connect 
mongoose.connect('mongodb+srv://mrprakash08112004:mrprakash@cluster0.owokt.mongodb.net/online-diary').then(()=>{console.log("DB connect")})

//create a schema

let note=new mongoose.Schema({
    date:String,
    time:String,
    title:String,
    paragraph:String,
    pgcolor:String,
    mood:String,
    tag:String,
    username:String
})
let Note=mongoose.model("Note",note)

let users=new mongoose.Schema({
  name:String,
  gmail:String,
  pass:String,
  createDate:String,
  userstatus:Boolean
})
let Users=mongoose.model("Users",users) 


//API FOR FETCHING THE Note
// app.get('/log',(req,res)=>(Log.find().then(()=>res.send())))
app.get('/Note',(req,res)=>(Note.find().then((item)=>res.send(item))))
app.get('/Userdata',(req,res)=>(Users.find().then((item)=>res.send(item))))

//API FOR CREATING Note
app.post('/CreateNote',(req,res)=>(Note.create(req.body).then((item)=>res.send(item))))
app.post('/CreateUser',(req,res)=>(Users.create(req.body).then((item)=>res.send(item))))


app.delete('/delete/:id', async (req, res) => {
    try {
      await Note.findByIdAndDelete(req.params.id);
      res.send({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: "Error deleting Note", error });
    }
  });
  
  //  UPDATE 
    app.put('/update/:id', async (req, res) => {
        try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedNote);
        } catch (error) {
        res.status(500).send({ message: "Error updating Note", error });
        }
    });

    app.put('/logindate/:id', async (req, res) => {
      try {
      const updatedLog = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(updatedLog);
      } catch (error) {
      res.status(500).send({ message: "Error updating Note", error });
      }
  });