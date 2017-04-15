angular.module('video-player')
.controller('ctrl', function($scope){
	$scope.videoData = window.exampleVideoData
})
.directive('app', function() {
  return {
  	scope: {
  	  video: '<'
      
    },
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {

    },
    templateUrl: 'src/templates/app.html'
  };
});
