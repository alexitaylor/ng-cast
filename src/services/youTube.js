angular.module('video-player')
.service('youTube', function($http, $window){
  this.search = function(query, cb) {
	  $http.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
		  	part: 'snippet',
		  	key: window.YOUTUBE_API_KEY,
		  	q: query,
		  	maxResults: 5,
		  	type: 'video',
		  	videoEmbaddable: 'true'
			}
    })
    .then(function({data}){
      if (cb) {
        cb(data.items);
      }
    })
    .catch(function({err}) {
      console.log('fail');
    });
  };
});
