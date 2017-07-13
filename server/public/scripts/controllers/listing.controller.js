myApp.controller('ListingController', ['$http', function($http) {
  console.log('listing controller running');

  var self = this;

  self.message = "Welcome to the Listings View";
  self.listings = {list: []};

  getListings();


  function getListings() {
    $http.get("/listing")
      .then(function(response) {
        console.log(response.data);
        self.listings.list = response.data;
      });
  }

}]);
