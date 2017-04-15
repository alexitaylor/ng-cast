angular.module('video-player')

.directive('app', function() {
  return {
  	scope: {
  	  video: '<'
    },
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.selectVideo = function() {},
      this.searchResults = function() {},
      this.currentVideo = window.exampleVideoData[0],
      this.videos = window.exampleVideoData
    },
    templateUrl: 'src/templates/app.html'
  };
});
