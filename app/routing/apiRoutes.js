
const friendData = require("../data/friends");

module.exports = function (app){

app.get("/api/friends", function(req,res){
  res.json(friendData);

})

app.post("/api/friends", function(req, res){
  //  friendData.push(req.body);
  let user = req.body
  friendData.push(user);
console.log(user.scores)
for(let i = 0; i>= user.scores.length; i++){
  user.scores[i] = parseInt(user.scores[i])
for(let j = 0; j>= friendData[j].scores.length; j++){
difference = user.scores[i] - friendData.scores[j] //subtact arrays
totalDifference = math.abs(difference) //find difference
totalDifference.reduce(prev, curr);// add up array of total difference

//figure out method to find lowest difference

}


}
})}



