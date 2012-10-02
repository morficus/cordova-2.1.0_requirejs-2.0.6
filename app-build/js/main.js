
define('home',[], function(){
			return 'home page';	
		}
	);
require.config({
  paths: {
    baseUrl : 'js' 
  }
});


require(['home'], function(moduleName) {
  alert('Module loaded: ' + moduleName);
});

define("main",[], function(){});
