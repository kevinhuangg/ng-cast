angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: $window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        maxResults: 5,
        videoEmbeddable: 'true',
        type: 'video'
      }
    }).then(function successCallback(response) {
      console.log(response);
      callback(response.data.items);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        //
      console.log('haha');
    });
  };
});
