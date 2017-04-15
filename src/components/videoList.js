angular.module('video-player')
// .controller('listController', function($scope) {
//   	// $scope.video = window.exampleVideoData;
// })
.directive('videoList', function() {
  return {
  	scope: {
  	  videos: '<',
      onClick: '<'
    },
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
//window.exampledata