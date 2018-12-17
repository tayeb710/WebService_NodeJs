var mongoose=require('mongoose');

// provider Schema

var providerSchema =mongoose.Schema({
    pseudo:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required: true
    },
    domaine:{
        type:String,
        required:true
    }
});

var Provider = module.exports = mongoose.model('Provider',providerSchema );

//Get providers
module.exports.getProviders= function(callback,limit) {
    Provider.find(callback).limit(limit);
};

//Get provider
module.exports.getProviderById= function(id,callback) {
    Provider.findById(id,callback);
};

/*
//Get provider
module.exports.getProviderByPseudo= function(location,callback) {
    Provider.find(location,callback);
};
*/

// add provider
module.exports.addProvider= function(provider,callback) {
    Provider.create(provider,callback);
};

// update provider
module.exports.updateProvider= function(id,provider,options,callback) {
    var query = {_id:id};
    var update ={
        pseudo: provider.pseudo,
        location: provider.location,
        domaine: provider.domaine
    };
    Provider.findOneAndUpdate(query,update,options,callback);
};

// delete provider
module.exports.removeProvider= function(id,callback) {
    var query = {_id:id};
    Provider.remove(query,callback);
};