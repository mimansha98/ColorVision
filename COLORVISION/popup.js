var b = null;
if(typeof browser != 'undefined'){
	b = browser;
}
else{
	b = chrome;
}

document.addEventListener('DOMContentLoaded', function() {

	var setBodyClass = function(className) {
	    b.tabs.query({active: true, currentWindow: true}, function(tabs){
			b.tabs.sendMessage(tabs[0].id, {action: "bodyClass", class: className});
		});
	}
	
	var colorchange = function(){
		var filter = document.querySelector('input[name = "radioFilter"]:checked').value;
		setBodyClass(filter);
	}
	
	var radios = document.getElementsByName("radioFilter");
	for (i = 0; i < radios.length; i++) {
	    radios[i].addEventListener("change", colorchange);
	}

});