const express = require("express");
const app = express();
const port = 3000; 

app.set("views", __dirname + "/views"); 
app.set("view engine", "hbs"); 

const users = ['Adam', 'Sofia', 'Jom', 'Brendan'];

app.get('/', (req, res) => {
    res.render("index", {heading: 'Welcome to my homepage!', users: users}); 
});

app.get('/contact', (req, res) => {
    res.render("contact", {heading: 'Welcome to my contact page!'});
});

app.listen(port, () => {console.log("Server is listening on port 3000.")});