var mongoose=require('mongoose');
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:user123@ds235352.mlab.com:35352/newangular');
console.log("mongodb connect...")
module.exports=mongoose;