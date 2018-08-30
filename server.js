/*var users=[{
  	name:'User1',
  	age: 34
  },
  {
  	name:'User2',
  	age: 52
  },
  {
  	name:'User3',
  	age: 23
  },
  {
  	name:'User4',
  	age: 41
  },
  {
  	name:'User5',
  	age: 35
  },
  {
  	name:'User6',
  	age: 39
  }]*/

var express=require('express');
var app=express();
var User=require('./models/user');
app.use(express.static(__dirname+'/dist/first-app'));

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/',function(req,res){
	res.sendFile(__dirname+'/dist/first-app/index.html');
})
app.get('/getusers',(req,res)=>{
	console.log('/getusers');
	User.find((err,data)=>{
    console.log(data);
    res.send(data);
  })
})

app.post('/adduser',(req,res)=>{
  console.log(req.body);
  var user=new User(req.body);
  user.save((err,data)=>{
    console.log(data);
    res.send('adduser');
  })
})
app.post('/removeuser',(req,res)=>{
  User.remove({_id: req.body.id},(err,data)=>{
    console.log('remove user');
  })
})

app.listen(process.env.PORT||8080);
console.log('Run Server!');