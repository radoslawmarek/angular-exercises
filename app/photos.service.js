app.factory('PhotosService',['$http','$q', function($http,$q) {
    var serviceFactory = {};

    var photosUrl = 'https://jsonplaceholder.typicode.com/photos';

    serviceFactory.getAllAlbums = function() {
        var albumsPromise = $http.get(photosUrl).then(function(response) {
            var albums = [];
            var currentAlbumId = 0;
            if (typeof response === 'object') {
                _.forEach(response.data, function(album) {
                   if (!_.find(albums, { 'albumId' : album.albumId })) {
                       albums.push({
                           albumTitle: 'Album: ' + album.albumId,
                           albumId: album.albumId,
                           albumThumbnailUrl: album.thumbnailUrl
                       });
                   }
                }, this);
            }

            return albums;
        },
        function (error) {
            return $q.reject(response.data);
        });

        return albumsPromise;
    }

    serviceFactory.getAlbum = function(albumId) {
        var getAlbumUrl = photosUrl + '?albumId=' + albumId;
        var albumPromise = $http.get(getAlbumUrl).then(function(response) {
            if (typeof response === 'object') {
                return response.data;
            }
            else {
                return $q.reject('Data error');
            }
        },
        function (response) {
            return $q.reject(response.data);
        });

        return albumPromise;
    }

    return serviceFactory;
}]);