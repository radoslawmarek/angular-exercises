app.controller('MainPageController', ['$scope','PhotosService', function($scope, photosService) {
    var vm = this;

    vm.title = 'AngularJS Exercises';
    vm.albums = []; 

    vm.albumClick = function(albumId) {
        photosService.getAlbum(albumId).then(function(photos) {
            console.log(photos);
        });
    }

    photosService.getAllAlbums().then(function(albums) {
        vm.albums = albums;
    });

}]);