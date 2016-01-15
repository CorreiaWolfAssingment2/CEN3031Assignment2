angular.module('listings', []).controller('ListingsController', ['$scope', 'Listings', function ($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.pressed = false;

    $scope.addListing = function () {
        $scope.listings.push({
            code: $scope.newCode,
            name: $scope.newName,
            coordinates: {
                latitude: $scope.newLatitude,
                longitude: $scope.newLongitude,
            },
            address: $scope.newAddress
        })
        $scope.newCode = "";
        $scope.newName = "";
        $scope.newLatitude = "";
        $scope.newLongitude = "";
        $scope.newAddress = "";
    };

    $scope.deleteListing = function (listing) {
        $scope.listings.splice($scope.listings.indexOf(listing), 1);
    };

    $scope.showDetails = function (listing) {
        $scope.detailedInfo = listing;
        $scope.pressed = true;
    };

  }
]);
