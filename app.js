const express = require("express");
const app = express();
const port = 3000; 

app.set("views", __dirname + "/views"); //setting views directory to /views
app.set("view engine", "hbs"); //setting view engine to hbs 
app.use(express.static('public')); //all static files in public folder are accessible by express

const users = ['user1', 'user2', 'user3', 'user4'];

app.get('/', (req, res) => {
    res.render("index", {heading: 'Welcome to my homepage!', users: users}); 
});

app.get('/contact', (req, res) => {
    res.render("contact", {heading: 'Welcome to my contact page!'});
});

app.listen(port, () => {console.log("Server is listening on port 3000.")});