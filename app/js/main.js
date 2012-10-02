require.config({
  paths: {
    baseUrl : 'js' 
  }
});


require(['home'], function(moduleName) {
  alert('Module loaded: ' + moduleName);
});
