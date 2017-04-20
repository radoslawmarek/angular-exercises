app.factory('PhotosService',['$http', function($http) {
    var self = this;

    self.getMessage = function() {
        return 'Hello from service!';
    }

    self.getAllAlbums = function() {
        $http.get('https://jsonplaceholder.typicode.com/photos').then(function(response) {
            console.log(response);
            var albums = [];
            var currentAlbumId = 0;
            if (response && response.data) {
                response.data.forEach(function(item) {
                    if (currentAlbumId !== item.albumId) {
                        var album = {
                            albumId: item.albumId,
                            thumbnailUrl: item.thumbnailUrl,
                            albumTitle: 'Album nr: ' + item.albumId
                        };
                        albums.push(album);
                    }
                }, this);
            }

            return albums;
        });
    }

    return {
        getMessage: self.getMessage,
        getAllAlbums: self.getAllAlbums
    };
}]);