app.controller('MainPageController', ['$scope','PhotosService', function($scope, photosService) {
    var self = this;

    self.title = 'Angular Exercises';
    self.albums = []; 
    // photosService.getAllAlbums().then(function(a) {
    //     console.log(a);
    // });
}]);