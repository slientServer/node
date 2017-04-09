var express= require('express');
var router= express.Router();

router.get('/:name', function(req, res){
	res.render('index', {name: req.params.name});
})

module.exports= router;