
//Demo Code
var flatiron = require('flatiron');
var coffeemenu = require('./coffeemenu');


app = flatiron.app;
app.use(flatiron.plugins.http);

coffeemenu.initialize();

app.router.get('/location/::locationId', function (locationId) {
	coffeemenu.getStoreLocation(locationId, this.res);
});
app.router.get('/barista/:baristaId', function (baristaId) {
	coffeemenu.getBarista(baristaId, this.res);
});
app.router.get('/drinker/:drinkerId', function(drinkerId) {
	coffeemenu.getDrinker(drinkerId, this.res);
});
app.router.get('/beverage/:beverageId', function(beverageId) {
	coffeemenu.getBeverage(beverageId, this.res);
});
app.router.get('/review/:reviewId', function(reviewId) {
	coffeemenu.getReview(reviewId, this.res);
});
app.start(3000);
