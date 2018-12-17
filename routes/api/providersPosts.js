

var express=require('express');
var mongoose =require('mongoose');

var router = express.Router();


// show providers
router.get('/providers', function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    Provider.getProviders(function (err,providers) {
        if(err){
            throw err;
        }
        res.json(providers);
    });
});

// show single provider by id
router.get('/providers/:_id', function (req,res) {
    Provider.getProviderById(req.params._id,function (err,provider) {
        if(err){
            throw err;
        }
        res.json(provider);
    });
});

/*
// show single provider by Pseudo
router.get('/providers/:location', function (req,res) {
    Provider.getProviderByPseudo(req.params.location,function (err,provider) {
        if(err){
            throw err;
        }

        res.json(provider);
    });
});
*/



//add provider
router.post('/providers', function (req,res) {
    var provider = req.body;
    Provider.addProvider(provider,function (err,provider) {
        if(err){
            throw err;
        }
        res.json(provider);
    });
});

//update provider
router.put('/providers/:_id', function (req,res) {
    var id = req.params._id;
    var provider = req.body;
    Provider.updateProvider(id,provider,{},function (err,provider) {
        if(err){
            throw err;
        }
        res.json(provider);
    });
});

//delete provider
router.delete('/providers/:_id', function (req,res) {
    var id = req.params._id;
    Provider.removeProvider(id,function (err,provider) {
        if(err){
            throw err;
        }
        res.json(provider);
    });
});





module.exports=router;