
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        injectCSSFromFile(getScriptPath()+"cv-inject.css");
        injectSVGFromFile(getScriptPath()+"cv.svg");
    }
}

var injectCSSFromFile = function(filePath){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", filePath, true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("style");
			inject.innerHTML = xmlHttp.responseText;
			document.body.appendChild(inject);
		}
	};
}

var injectSVGFromFile = function(filePath){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", filePath, true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("temp");
			inject.innerHTML = xmlHttp.responseText;
			document.body.appendChild(inject.firstChild);
		}
	};
}

var getScriptPath = function(){
	var scripts= document.getElementsByTagName('script');
	var path= scripts[scripts.length-1].src.split('?')[0];
	return path.split('/').slice(0, -1).join('/')+'/';
}