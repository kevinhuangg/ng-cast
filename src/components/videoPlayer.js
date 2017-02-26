angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // console.log($scope);
    },
  };
});
