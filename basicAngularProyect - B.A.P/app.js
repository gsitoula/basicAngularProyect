(function(){
	var app = angular.module("basicApp", ['basic-directives']);

	app.controller("BasicController", ['$http', function($http) {
       var basic = this;
       basic.products = [];
       $http.get('./basic-products.json').success(function (data) {
       	   basic.products = data;
       });
	}]);

	app.controller('ReviewController', function() {
		  this.review = {};

		  this.addReview = function(product) {
		  	product.reviews.push(this.review);

		  	this.review = {};
		  };
	});

	
})();