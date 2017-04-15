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
      this.searchResults = function() 3{},
      this.currentVideo = window.exampleVideoData[0],
      this.videos = window.exampleVideoData
      this.onClick = (video) => {
        // this.currentVideo = 'dawdn';
        this.currentVideo = video;
        // console.log("I was clicked", video);
      }
    },
    templateUrl: 'src/templates/app.html'
  };
});
