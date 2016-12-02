var express = require('express');
var router = express.Router();

var Modelo = require('../models/usuarios');

router.get('/', function(req,res,next){
	Modelo.find({},function(err1, data){
		if(err1)
			console.log(err1);
		res.json(data);
	});

});

router.get('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findById(id,function(err1, data){
		if(err1)
			console.log(err1);
		res.json(data);
	});

});

router.post('/',function(req,res,next){
	Modelo.create(req.body, function(err1,data){
		if (err1)
			console.log(err1);
		var objeto = req.body;
		objeto.fecha_nac = Date(req.body.fecha_nac)
		res.json(data);
	});
});

router.put('/:id', function(req,res,next){
	var id = req.params.id;
	Modelo.findById(id, function(err1,data){
		if (err1)
			console.log(err1);

		data.apell_P = req.body.apell_P;
		
		Modelo.update(id,data,function(err1,newdata){
			if(err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});

router.delete('/:id', function(req, res, next) {
	var id = req.params.id;
	Modelo.findByIdAndRemove(id,function(err,data){
		if(err)
			console.log(err1);
		res.json(data);
		});
	});


module.exports = router;