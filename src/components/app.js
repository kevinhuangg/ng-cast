angular.module('video-player')

.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html',

  };
})
.controller('appCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.videoData = $window.exampleVideoData;
  // console.log($scope.videoData);
}]);