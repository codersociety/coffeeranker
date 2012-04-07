dbs = require('./config/databases')
mongode = require('mongode');

// Usage notes: https://github.com/philippkueng/node-neo4j

dbs.neo4j.InsertNode({
  name: 'Darth Vader',
  sex: 'male'
},function(err, node){
  if(err) throw err;
  // Output node properties.
  console.log(node.data);
  // Output node id.
  console.log(node.id);
});



exports.getStoreLocation = function (companyId, locationId, response) {
  	var storeLocationCollection = dbs.mongo.collection('StoreLocation');
	response.writeHead(200, { 'Content-Type': 'application/json' });  
	storeLocationCollection.findOne({$and: [{"CompanyId" : companyId}, 
								{"LocationId" : locationId}]}, function(err, object) {
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