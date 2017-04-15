angular.module('video-player')
.controller('myController', function(youTube) {
  this.currentVideo = window.exampleVideoData[0];
  this.videos = window.exampleVideoData;
  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = data[0];
  };
  this.searchVideo = (input) => {
    youTube.search(input, this.searchResults);
  };

  youTube.search('cats', this.searchResults);
})

.directive('app', function() {
  return {
  	scope: {
  	  video: '<'
    },
  	controllerAs: 'ctrl',
    bindToController: true,
    controller: 'myController',
    templateUrl: 'src/templates/app.html'
  };
});
