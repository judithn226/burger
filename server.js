const express = require("express");
const bodyParser = require("body-parser");
const expressHndl = require("express-handlebars");

const app = express();

let PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/public"));

app.engine("handlebars", expressHndl({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT);
