var express = require("express");
var hbs= require("hbs");
const port= process.env.PORT || 3000;

hbs.registerPartials(__dirname +"/views/partials");
hbs.registerHelper("cDate", ()=>{
    var time= new Date().getFullYear();
    return time;
});
var app= express();


app.set("view enginge", "hbs");

app.use(express.static( __dirname+"/public"));

app.get("/", function(req, res){
    res.render("home.hbs", {name:"Abdul rehman"});
});


app.get("/projects", function(req, res){
    res.render("projects.hbs");
});



app.listen(port, (error)=>{
    if(error){
        console.log("cannot listen");
    }
});