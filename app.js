const express = require("express");
const bodyParser = require("body-parser");


const port = process.env.PORT || 3000;
const app = express();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("donation");
});



app.listen(port, function() {
    console.log("Server started on port 3000");
});