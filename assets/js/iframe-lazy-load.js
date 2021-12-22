var iframeContainerDiv = document.querySelector('PUT SELECTOR HERE');

var iframeCode = 'PUT IFRAME HTML HERE'

if (iframeContainerDiv != null) {

	function loadiframe() {
		if (window.pageYOffset > 0) {
	        iframeContainerDiv.insertAdjacentHTML('afterbegin', iframeCode);
	        window.removeEventListener('scroll', loadiframe);
	    }
	}

	if (window.pageYOffset <= 0) {
	    window.addEventListener('scroll', loadiframe);
	} else {
	    loadiframe();
	}

}
