angular.module('video-player')
// .controller('playerController', function($scope) {
//   // $scope.video = window.exampleVideoData
//   // $scope.src = 'https://www.youtube.com/embed/' + $scope.video[0].id.videoId
//   // $scope.video = video
// })

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
