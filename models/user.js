var mongoose=require('../mongoose');
var schemaUser=new mongoose.Schema({
		name:{
		type: String,
		unique:true,
		required: true,
	},
		age:{
		type: Number,
		unique:true,
		required: true,
	}
})
var User=mongoose.model("User",schemaUser);
module.exports=User;