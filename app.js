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
// working on user posts books articles we will user the userID only which is set in cookies or session 
app.put('/user',(req,res)=>{
    if(userSession){
        const doc=await db
        // add  file in sever and article 
    }
})
// end of update
app.get('/',(req,res)=>{
    res.render('index');
})
app.get("/product",(req,res)=>{
    res.render("product")
})
