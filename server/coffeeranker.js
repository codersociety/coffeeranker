var flatiron = require('flatiron');
var coffeemenu = require('./coffeemenu');

app = flatiron.app;
app.use(flatiron.plugins.http);

coffeemenu.initialize();

// GET individual Record

app.router.get('/location/:locationId', function (locationId) {
	coffeemenu.getLocation(locationId, this.res);
});
app.router.get('/barista/:baristaId', function (baristaId) {
	coffeemenu.getBarista(baristaId, this.res);
});
app.router.get('/drinker/:drinkerId', function(drinkerId) {
	coffeemenu.getDrinker(drinkerId, this.res);
});
app.router.get('/drink/:drinkId', function(drinkId) {
	coffeemenu.getDrink(drinkId, this.res);
});
app.router.get('/review/:reviewId', function(reviewId) {
	coffeemenu.getReview(reviewId, this.res);
});

// GETList of records

app.router.get('/location', function () {
	coffeemenu.getLocationList(this.res);
});
app.router.get('/barista', function () {
	coffeemenu.getBaristaList(this.res);
});
app.router.get('/drinker', function() {
	coffeemenu.getDrinkerList(this.res);
});
app.router.get('/drink', function() {
	coffeemenu.getDrinkList(this.res);
});
app.router.get('/review', function() {
	coffeemenu.getReviewList(this.res);
});

// POST
app.router.post('/location', function () {
	console.log("Location: " + this.req.body);
    coffeemenu.postLocation(this.res, this.req.body);
});
app.router.post('/barista', function () {
    coffeemenu.postBarista(this.res, this.req.body);
});
app.router.post('/drinker', function() {
	coffeemenu.postDrinker(this.res, this.req.body);
});
app.router.post('/drink', function() {
	coffeemenu.postDrink(this.res, this.req.body);
});
app.router.post('/review', function() {
	coffeemenu.postReview(this.res, this.req.body);
});

// Listen on port 3000
app.start(3000);
