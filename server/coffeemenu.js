dbs = require('../config/databases')
mongode = require('mongode');
util = require('util');

var mongoDb;

exports.initialize = function () {
	console.log ("Initialize mongoDb connection.");
	mongoDb = dbs.mongo;
}

// GET

exports.getSingleRecord = function(id, response, collectionName) {
	var collection = mongoDb.collection(collectionName);
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var o_id = new mongode.ObjectID(id);
	
	collection.findOne({_id : o_id}, 
	    function(err, object) {
		if(object != null)
		{
			response.write(JSON.stringify(object));
			response.end();
		}
		else
		{
			response.end();
		}
    });
}

exports.getBarista = function (baristaId, response) {
	this.getSingleRecord(baristaId, response, "Barista");
}

exports.getDrinker = function (drinkerId, response) {
	this.getSingleRecord(drinkerId, response, "Drinker");
}

exports.getLocation = function (locationId, response) {
	if (locationId == undefined) {
		this.getList(response, "Location");
	} else {
		this.getSingleRecord(locationId, response, "Location");
	}
}

exports.getDrink = function (drinkId, response) {
	this.getSingleRecord(drinkId, response, "Drink");
}

exports.getReview = function (reviewId, response) {
	this.getSingleRecord(reviewId, response, "Review");
}

// POST

exports.getList = function(response, collectionName) {
	var collection = mongoDb.collection(collectionName);
	response.writeHead(200, { 'Content-Type': 'application/json' });
	
	var first = 0;
	
	response.write('{ "' + collectionName + '" : { ');
	
	collection.find().each(function(err, item) {
		if (item != null) {
			if (first != 0) {
				response.write(', ');
			}
			
			var data = JSON.stringify(item);
			console.log("List: " + data);
			response.write(data);
			first = 1;
		} else {
			response.write(" } } ");
			response.end();
		}
	});
}

exports.getBaristaList = function (response) {
	this.getList(response, "Barista");
}

exports.getDrinkerList = function (response) {
	this.getList(response, "Drinker");
}

exports.getLocationList = function (response) {
	this.getList(response, "Location");
}

exports.getDrinkList = function (response) {
	this.getList(response, "Drink");
}

exports.getReviewList = function (response) {
	this.getList(response, "Review");
}


// GET List 

exports.postData = function (response, request_body, collectionName) {
  	var collection = mongoDb.collection(collectionName);
	var logString = JSON.stringify(request_body);
	console.log(collectionName + ": " + logString);
	
	response.writeHead(200, { 'Content-Type': 'application/json' });
	collection.save(request_body,
	    function(err, saved) {
			if( err || !saved ) 
				console.log("Data not saved");
			else 
				console.log("Data saved");
			response.write("Data Saved");
			response.end();
		});
}

exports.postBarista = function (response, request_body) {
	this.postData(response, request_body, "Barista");
}

exports.postDrinker = function (response, request_body) {
	this.postData(response, request_body, "Drinker");
}

exports.postLocation = function (response, request_body) {
	this.postData(response, request_body, "Location");
}

exports.postDrink = function (response, request_body) {
	this.postData(response, request_body, "Drink");
}

exports.postReview = function (response, request_body) {
	this.postData(response, request_body, "Review");
}

