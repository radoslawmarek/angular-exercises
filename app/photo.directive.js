app.directive('displayPhoto', [function() {
    var controller = ['$scope', function($scope) {

        $scope.bigImageVisible = false;
        $scope.imageClicked = function() {
            $scope.bigImageVisible = true;

        }
        $scope.closeBigPhoto = function() {
            $scope.bigImageVisible = false;
        }
    }];

    return {
        restrict: 'E',
        scope: {
            photo: '='
        },
        templateUrl: 'app/photo.directive.html',
        controller: controller
    };
}]);