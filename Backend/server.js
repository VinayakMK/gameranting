const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const collection = require("mongodb")
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://newsportal:passwordfornewsportal@cluster0.z2lm8kw.mongodb.net/newsUser?retryWrites=true&w=majority"

var path = require('path');

dotenv.config({path:"./config/config.env"});

app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'images')));

//mongoose.connect('mongodb://127.0.0.1:27017/db_blog', {useNewUrlparser:true}, {useUnifiedTopology:true})
//.then((data) => console.log(`Database connected with ${data.connection.host}`))
//.catch((err) => console.log(err.message));

const postSchema = new mongoose.Schema({
    username:String,
    password:String
});

let Post = mongoose.model('Post', postSchema);

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true 
};

mongoose.connect(dbUrl, connectionParams)
  .then((data) => {
    console.log(`Database Connected on ${data.connection.host}`);
  })
  .catch((err) => {
    console.log(err.message);
  });


const users = [
    {username:"Vinayak", password:"123456789"},
    {username:"Anjali", password:"987654321"},
]

app.get("/",(req,res)=>{

    const {token} = req.cookies;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err,result){
            if(err){
               res.redirect('/home');     
            }else{
                res.sendFile(__dirname + "/login.html");
            }
        })

    }else{
    res.sendFile(__dirname + "/login.html");
    }
});

app.get("/signup",(req,res)=>{

    res.sendFile(__dirname + "/signup.html"); //goes to signup page
});

app.post("/login", async(req,res)=>{
    const {username, password} = req.body;
    const user = users.find((data) => data.username === username && data.password === password);

    let newPost = new Post({
        username:req.body.username,
        password:req.body.password
    });

    newPost.save();

    if(user){
        const data = {
            username,
            date:Date(),
        }
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY,{expiresIn:"10min"});
        console.log(token);
        res.cookie("token", token).redirect('/home');
    }else{
        res.redirect("/");
    }
});



app.get("/home",(req,res)=>{
    const {token} = req.cookies
    console.log(token);

    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err,result){
        if(err){
            res.redirect('/')
        }else{
            res.sendFile(__dirname + "/home");
        }
    })
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});