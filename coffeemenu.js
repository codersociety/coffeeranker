exports.getBarista = function (baristaId, response) {
  	var baristaCollection = dbs.mongo.collection('BaristaLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	baristaLocationCollection.findOne({$and: [{"BaristaId" : baristaId}, 
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
	drinkerLocationCollection.findOne({$and: [{"DrinkerId" : drinkerId}, 
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
	locationLocationCollection.findOne({$and: [{"LocationId" : locationId}, 
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
	beverageLocationCollection.findOne({$and: [{"BeverageId" : beverageId}, 
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
	reviewLocationCollection.findOne({$and: [{"ReviewId" : reviewId}, 
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

