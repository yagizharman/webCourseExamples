const express = require('express');
const app = express();
const path=require('path');
const redditData=require('./data.json');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.get('/',(req,res)=>{
    res.render("home.ejs")
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data =redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
    console.log(data);
   
})
app.get('/random',(req,res)=>{
    const num=Math.floor(Math.random()*10)+1;
    console.log(num);
    res.render("random",{num});
})
app.listen(3000,()=>{
    console.log("Lıstening on Port 3000")
})