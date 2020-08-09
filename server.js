const express = require('express')
const response  = require('express')
var sentiment = require('sentiment');
const Sentiment = require('sentiment');

var sentiment = new sentiment();

let app=express()
let app2=express()

app.use(express.static('public'))

let addition=function(num1, num2,){
    let result=num1+num2;
    return result;

}
let sentimentAnalysis=function(text){
    result = sentiment.analyze(text);
    return result
}

app.get('/analyze',function(request,response){
    let text=request.query.text;
let resultAnalysis=sentimentAnalysis(text)
response.json(resultAnalysis)
})

app.get('/adder',function(request,response){
    let num1=parseInt(request.query.num1);
    let num2=parseInt(request.query.num2);
    console.log(num1)
    console.log(num2)
    let myResult=addition(num1,num2);
    response.json({result:myResult})
})

app.get('/',function(request,response){
    response.send('Hello world')
})

app.get('/test',function(request,response){
    response.send('This is the test endpoint')
})
app.listen(80)