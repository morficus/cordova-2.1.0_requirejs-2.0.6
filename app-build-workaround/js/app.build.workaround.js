/*
 * For documentation on what everything means, please refer to this URL: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
({
    appDir : '../',
    baseUrl : 'js/',
    dir : '../../app-build-workaround/',
    mainConfigFile : 'main.js',
    
    optimize : 'none',
    
	onBuildRead: function (moduleName, path, contents) {
		if (path.indexOf('cordova-2.1.0-android.js') === -1) {
		  return contents;
		} else {
			return contents.replace(/define\s*\(/g, 'CORDOVADEFINE(');
		}
	},
	onBuildWrite: function (moduleName, path, contents) {
		if (path.indexOf('cordova-2.1.0-android.js') === -1) {
		  return contents;
		} else {
			return contents.replace(/CORDOVADEFINE\(/g, 'define(');
		}
	},
    modules : [
        {
            name : 'main'
        }
    ]
})
