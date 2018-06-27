'use strict';
let bodyParser = require('body-parser')


let express = require('express');
let app = express();

const brenda = {
    name: 'brenda',
    email: 'brenda@gmail.com',
    password: 'brenda',
    token:'123'
};

app.listen(3000);
app.use(express.static(__dirname + '/app_client'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/api/login',(req,res)=>{
    const userLogin=req.body;
    if(userLogin.password === brenda.password && userLogin.email === brenda.email){
        res.send(brenda);       
    }else{
        res.status(500);
        res.send('No soy brenda');
    }    
});

app.post('/api/register', (req,res)=>{
    console.log("registered");
    res.send("register");
});
app.get('/logout', (req,res)=>{
    console.log("logout");
    res.send("logout");
});
app.get('/api/profile', (req,res)=>{
    console.log("profile");
    res.send(brenda);
});

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/app_client/index.html'));
// })

module.exports = app;

