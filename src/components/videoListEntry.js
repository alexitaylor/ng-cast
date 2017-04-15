angular.module('video-player')
.directive('videoListEntry', function() {
  return {
  	scope: {
  		video: '<',
      onClick: '<'
    },
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      // this.videoClick = () => {
      //   // this.video = window.exampleVideoData[index];
      //   console.log("I was clicked")
      // }
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
