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


//Demo Code
var flatiron = require('flatiron');
var beermenu = require('./beermenu');


app = flatiron.app;
app.use(flatiron.plugins.http);

beermenu.initialize();

app.router.get('/storelocation/:companyId/:locationId', function (companyId, locationId) {
	beermenu.getStoreLocation(companyId, locationId, this.res);
});
app.router.get('/menusettings/:menuId', function (menuId) {
	beermenu.getMenuSettings(menuId, this.res);
});
app.router.get('/beermenu/:companyId/:locationId/:itemType', function (companyId, locationId, itemType) {
	beermenu.getBeermenu(companyId, locationId, itemType, this.res);
});

app.start(3000);
