dbs = require('./config/databases')
mongode = require('mongode');

var mongoDb;

exports.initialize = function () {

    mongoDb = dbs.mongo;

}

// GET

exports.getBarista = function (baristaId, response) {
  	var baristaCollection = mongoDb.collection('Barista');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	baristaCollection.findOne({"BaristaId" : baristaId}, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.getDrinker = function (drinkerId, response) {
  	var drinkerCollection = mongoDb.collection('Drinker');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	drinkerCollection.findOne({"DrinkerId" : drinkerId}, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.getLocation = function (locationId, response) {
  	var locationCollection = mongoDb.collection('Location');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	locationCollection.findOne({"LocationId" : locationId}, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.getBeverage = function (beverageId, response) {
  	var beverageCollection = mongoDb.collection('Beverage');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	beverageCollection.findOne({"BeverageId" : beverageId}, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.getReview = function (reviewId, response) {
  	var reviewCollection = mongoDb.collection('Review');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	reviewCollection.findOne({"ReviewId" : reviewId}, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

// POST

exports.postBarista = function (response, request_body) {
  	var baristaCollection = mongoDb.collection('Barista');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
        baristaCollection.save(request_body,
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.postDrinker = function (response, request_body) {
  	var drinkerCollection = mongoDb.collection('Drinker');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	drinkerCollection.save(request_body, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.postLocation = function (response, request_body) {
  	var locationCollection = mongoDb.collection('Location');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	locationCollection.save(request_body,
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.postBeverage = function (response, request_body) {
  	var beverageCollection = mongoDb.collection('Beverage');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	beverageCollection.save(request_body, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

exports.postReview = function (response, request_body) {
  	var reviewCollection = mongoDb.collection('Review');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	reviewCollection.save(request_body, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
		}
		else
		{
    	                response.end();
		}
    });
}

