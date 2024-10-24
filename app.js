const express = require('express');
const app = express();
const {render} = require('ejs');


// Middleware to parse JSON
app.use(express.json()); 
// Middleware to parse URL-encoded form data (if needed)
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./static"));
app.set('view engine','ejs');





app.listen(3000, ()=>{
    console.log("eBaruwa.com");
})


// routing the web
app.get('/signin', (req,res)=>{
    res.render('signup')
})

app.get('/',(req,res)=>{
    res.render('index');
})
app.get("/product",(req,res)=>{
    res.render("product")
})