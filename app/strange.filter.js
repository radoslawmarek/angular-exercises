app.filter('strange', ['$sce', function($sce) {
    function getFract(value) {
        var splited = value.toString().split('.');
        if (_.isArray(splited) && splited.length === 2) {
            return _.toInteger(splited[1]);
        }

    }

    return function(value, precision) {
        var result = '';
        var splited = value.toString().split('.');
        if (_.isArray(splited) && splited.length === 2) {
            var fract = _.toNumber('0.' + splited[1]);
            if (precision) {
                fract = _.round(fract, precision);
            }

            result = splited[0] + '<sup>' + getFract(fract) +'</sup>';
        }

        return $sce.trustAsHtml(result);
    }
}]);