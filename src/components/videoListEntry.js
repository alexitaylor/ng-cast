angular.module('video-player')
.controller('vleController', function($scope) {
	//$scope.video = window.exampleVideoData
	// console.log($scope.video)
	// $scope.title = window.exampleVideoData.video.snippet.title

	// }
})
.directive('videoListEntry', function() {
  return {
  	scope: {
  		videos: '<'

    },

  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {

    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
