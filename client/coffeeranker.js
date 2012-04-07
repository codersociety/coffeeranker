(function(){

window.Beverage = Backbone.Model.extend({

});

window.Barrista = Backbone.Model.extend({
	
});

window.Location = Backbone.Model.extend({
	
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


}());