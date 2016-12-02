var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo =  new schema ({

	matricula : {type:Number,unique:true,require:true},
	nombre:String,
	apell_P:String,
	apell_M:String,
	email:String,
	contraseña:String

});

var Usuario = mongoose.model("usuario", Modelo);
module.exports=Usuario;