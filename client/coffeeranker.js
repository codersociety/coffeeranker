(function(){

window.Beverage = Backbone.Model.extend({

});

window.Barrista = Backbone.Model.extend({
	
});

window.StoreLocation = Backbone.Model.extend({
	
});

window.Drinker = Backbone.Model.extend({

});

window.BeverageList = Backbone.Collection.extend({
	model: Beverage,
	localStorage: new Store('beverages'),
	nextOrder: function(){
		if(!this.length)return 1;
		return this.last().get('order')+1;
	},
	comparator: function(beverage){
		return beverage.get('order');
	},
	pluralize: function(count){
		return count == 1 ? 'beverage' : 'beverages';
	}
});

window.Beverages = new BeverageList;


window.BarristaList = Backbone.Collection.extend({
	model: Barrista,
	localStorage: new Store('barristas'),
	nextOrder: function(){
		if(!this.length)return 1;
		return this.last().get('order')+1;
	},
	comparator: function(barrista){
		return barrista.get('order');
	},
	pluralize: function(count){
		return count == 1 ? 'barrista' : 'barristas';
	}
});

window.Barristas = new BarristaList;


window.StoreLocationList = Backbone.Collection.extend({
	model:StoreLocation,
	localStorage: new Store('storelocations'),
	nextOrder: function(){
		if(!this.length)return 1;
		return this.last().get('order');
	},
	comparator: function(storelocation){
		return beverage.get('order');
	},
	pluralize: function(count){
		return count ==1 ? 'storelocation': 'storelocations';
	}
});

window.StoreLocations = new StoreLocationList;

}());