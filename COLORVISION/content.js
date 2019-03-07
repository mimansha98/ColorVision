var b = null;
if(typeof browser != 'undefined'){
	b = browser;
}
else{
	b = chrome;
}

//Change class
b.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message.action == "bodyClass") {
		document.body.classList.remove("protanopia");
		document.body.classList.remove("deuteranopia");
		document.body.classList.remove("tritanopia");
		document.body.classList.remove("protanomaly");
		document.body.classList.remove("deuteranomaly");
		document.body.classList.remove("tritanomaly");
		if(message.class != ""){					
			document.body.classList.add(message.class);
		}
	}
});


injectSVGFromFile(b.extension.getURL("cv/cv.svg"));


injectCSSFromFile(b.extension.getURL("cv/cv-inject.css"));