const express=require("express");
const app=express();



app.get('/',(req,res)=>{
    res.send('HOMEPAGE!!')
})
app.get('/r/:subreddit',(req,res)=>{
 const {subreddit}=req.params;
 res.send(`Browsing the ${subreddit}`) ; 
})
app.get('/r/:subreddit/:postID',(req,res)=>{
    const {subreddit,postID}=req.params;
    res.send(`Browsing the ${subreddit}'s ${postID}. post`) ; 
   })
app.get('/cats',(req,res)=>{
    res.send('MEOOW!!')
})
app.post('/cats',(req,res)=>{
    res.send('POST REQUEST CATS!!')
})
app.get('*/dogs',(req,res)=>{
    res.send('HAVHAV!!')
})

app.get('/search',(req,res)=>{
    const {q}=req.query;
    if(!q){
        res.send('nothing fosund')
    }
    res.send(`result for ${q}`)
    console.log(q);
})
app.listen(8080,()=>{
    console.log("Lıstening 8080")
})