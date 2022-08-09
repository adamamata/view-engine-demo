const express = require("express");
const app = express();
const port = 3000; 

app.set("views", __dirname + "/views"); 
app.set("view engine", "hbs"); 

app.get('/', (req, res) => {
    res.render("index", {heading: 'Welcome to my homepage!'}); 
});

app.listen(port, () => {console.log("Server is listening on port 3000.")});