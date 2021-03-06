const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("server is listening on: http://localhost:" + PORT)
});

