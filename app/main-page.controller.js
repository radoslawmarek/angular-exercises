app.controller('MainPageController', ['$scope','PhotosService', function($scope, photosService) {
    var vm = this;

    vm.title = 'AngularJS Exercises';
    vm.selectedAlbum = -1;
    vm.albums = []; 
    vm.photos = [];

    vm.albumClick = function(albumId) {
        photosService.getAlbum(albumId).then(function(photos) {
            vm.photos = photos;
        });
        if (albumId === vm.selectedAlbum) {
            vm.selectedAlbum = -1;
        }
        else {
            vm.selectedAlbum = albumId;
        }
        
    }

    photosService.getAllAlbums().then(function(albums) {
        vm.albums = albums;
    });

}]);