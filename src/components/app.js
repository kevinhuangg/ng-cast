angular.module('video-player')

.directive('app', function() {
  return {
    scope: {},
    templateUrl: 'src/templates/app.html',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($window, youTube) {
      // this.videos = $window.exampleVideoData;
      // this.currentVideo = this.videos[0];
      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };
      this.searchResults = function(results) {
        this.videos = results;
        this.currentVideo = results[0];
      }.bind(this);

      youTube.search('dogs', this.searchResults);

      // console.log($scope);
    }
  };
});
