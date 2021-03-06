angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      if (!this.video) {
        this.text = '';
      }
      this.text = 'Please wait';
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
