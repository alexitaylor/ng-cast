angular.module('video-player') 

.directive('search', function() {
  return {
  	scope: {

    },
    
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {

    },
    templateUrl: 'src/templates/search.html'
  };
});
