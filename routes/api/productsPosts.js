var express=require('express');
var mongoose =require('mongoose');

var router = express.Router();

// show products
router.get('/products', function (req,res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    Product.getProducts(function (err,products) {
        if(err){
            throw err;
        }
        res.json(products);
    });
});

// show single product by id
router.get('/products/:_id', function (req,res) {
    Product.getProductById(req.params._id,function (err,product) {
        if(err){
            throw err;
        }
        res.json(product);
    });
});
/*
// show single product by label
router.get('/products/:_id', function (req,res) {
    Product.getProductByRefer(req.params._id,function (err,product) {
        if(err){
            throw err;
        }
        res.json(product);
    });
});
*/





//add product
router.post('/products', function (req,res) {
    var product = req.body;
    Product.addProduct(product,function (err,product) {
        if(err) {
            throw err;
        }
        res.json(product);
    });
});

//update product
router.put('/products/:_id', function (req,res) {
    var id = req.params._id;
    var product = req.body;
    Product.updateProduct(id,product,{},function (err,product) {
        if(err){
            throw err;
        }
        res.json(product);
    });
});

//delete product
router.delete('/products/:_id', function (req,res) {
    var id = req.params._id;
    Product.removeProduct(id,function (err,product) {
        if(err){
            throw err;
        }
        res.json(product);
    });
});


module.exports=router;