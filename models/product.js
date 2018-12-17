var mongoose=require('mongoose');

// product Schema

var productSchema =mongoose.Schema({
    refer:{
        type: String,
        required:true
    },
    label:{
        type: String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    quantity:{
        type:String ,
        required:true


    }
});

var Product = module.exports = mongoose.model('Product',productSchema );

//Get products
module.exports.getProducts= function(callback,limit) {
    Product.find(callback).limit(limit);
};

//Get product
module.exports.getProductById= function(id,callback) {
    Product.findById(id,callback);
};


/*
module.exports.getProductByRefer = function(label) {
    Product.find(label);
};
*/

// add product
module.exports.addProduct= function(product,callback) {
    Product.create(product,callback);
};

// update product
module.exports.updateProduct= function(id,product,options,callback) {
    var query = {_id:id};
    var update ={
        refer: product.refer,
        label: product.label,
        price:product.price,
        quantity: product.quantity
    };
    Product.findOneAndUpdate(query,update,options,callback);
};

// delete product
module.exports.removeProduct= function(id,callback) {
    var query = {_id:id};
    Product.remove(query,callback);
};





