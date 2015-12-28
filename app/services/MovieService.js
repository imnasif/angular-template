angular.module('demo-app').factory('MovieService', ['$http', function ($http) {

    var movieList = [];
    $http.get('backend/api/get_movies.php')
        .success(function (movies) {
            movies.forEach(function(movie){
                movieList.push(movie);
            });
        });


    return {
        getMovieList: function(){
            return movieList; 
        }
    };

}]);






