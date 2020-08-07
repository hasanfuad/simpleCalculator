const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}))
  
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);

    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Two sum result: "+ result);
});


app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight/Math.pow(height, 2);
    var round = Math.floor(bmi);

    if(round <= 18)
    {
        res.send("Your BMI is "+round+". <h1>Your are Under Weight</h1>");
    }
    else if( round >= 24)
    {
        res.send("Your BMI is "+round+". <h1>Your are Over Weight</h1>");
    }
    else
    {
        res.send("Your BMI is "+round+". <h1>Your are normal Weight</h1>");
    }

    
})



app.listen(3000, function(){

    console.log("Server is running!");
})