// GET

exports.getBarista = function (baristaId, response) {
  	var baristaCollection = dbs.mongo.collection('BaristaLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	baristaLocationCollection.findOne({"BaristaId" : baristaId}, 
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
  	var drinkerCollection = dbs.mongo.collection('DrinkerLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	drinkerLocationCollection.findOne({"DrinkerId" : drinkerId}, 
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
  	var locationCollection = dbs.mongo.collection('LocationLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	locationLocationCollection.findOne({"LocationId" : locationId}, 
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
  	var beverageCollection = dbs.mongo.collection('BeverageLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	beverageLocationCollection.findOne({"BeverageId" : beverageId}, 
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
  	var reviewCollection = dbs.mongo.collection('ReviewLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	reviewLocationCollection.findOne({"ReviewId" : reviewId}, 
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
  	var baristaCollection = dbs.mongo.collection('BaristaLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
        baristaLocationCollection.save(request_body,
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
  	var drinkerCollection = dbs.mongo.collection('DrinkerLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	drinkerLocationCollection.save(request_body, 
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
  	var locationCollection = dbs.mongo.collection('LocationLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	locationLocationCollection.save(request_body,
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
  	var beverageCollection = dbs.mongo.collection('BeverageLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	beverageLocationCollection.save(request_body, 
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
  	var reviewCollection = dbs.mongo.collection('ReviewLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	reviewLocationCollection.save(request_body, 
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

