var path = require("path");

module.exports = function(app){

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});

//if no route is selected
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
