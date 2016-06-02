(function(ext) {
    var userHasAllowedJs = true;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: "Ready"};
    };
    ext.get = function(msg) {
        if (true) {
            return eval(msg)
        }
    };
    ext.exe = function(js) {
        if (userHasAllowedJs) {
            eval(js);
        }else{
            if(confirm("Scratch Boost ►►\n\nThis project uses JavaScript. Do you trust this project?")) {
                eval(js);
                userHasAllowedJs = true;
            }
	}
    };
    ext.req = function(type, url, data, callback) {
    	if(true) {
        	$.ajax({url: url, type: type, data: JSON.parse(data), success: function(d){
        		callback(JSON.stringify(d));
        	}});
    	}
    };
    var descriptor = {
        blocks: [
        	[" ", "get JS: %s", "get", "return 'Hello!';"],
        	[" ", "run JS: %s", "exe", "alert(\"Scratch is awesome!\");"]
        ],
        menus: {
        	requests: ["GET", "POST", "PUT", "DELETE"]
        },
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#javascript"
    };
    ScratchExtensions.register("JavaScript library", descriptor, ext);
})({});
