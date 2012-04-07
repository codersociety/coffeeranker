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
app.router.post('/location', function () {
    coffeemenu.postStoreLocation(this.res, this.req.body);
});
app.router.post('/barista', function () {
    coffeemenu.postBarista(this.res, this.req.body);
});
app.router.post('/drinker', function() {
	coffeemenu.postDrinker(this.res, this.req.body);
});
app.router.post('/beverage', function() {
	coffeemenu.postBeverage(this.res, this.req.body);
});
app.router.post('/review', function() {
	coffeemenu.postReview(this.res, this.req.body);
});
app.start(3000);
