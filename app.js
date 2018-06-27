'use strict';

let express = require('express');
let app = express();

app.listen(3000);
app.use(express.static(__dirname + '/app_client'));

app.post('/api/login',(req,res)=>{
    console.log("login");
    res.send("login ;D");
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
    res.send("profile");
});

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/app_client/index.html'));
// })

module.exports = app;

