angular.module('video-player')
.controller('listController', function($scope) {
  	$scope.video = window.exampleVideoData;
})
.directive('videoList', function() {
  return {
  	scope: {
  		videos: '<'
    },
    
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.onClick = () => {

      } 
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
//window.exampledata