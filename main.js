
let url = "https://github.com/pratyush400/pattern_2d.md"

window.onload = function() {
	// a new request object
	let request = new XMLHttpRequest()
	
	// when the state of the request changes (like it is opened, closed, headers recieved etc.), do something
	request.onreadystatechange = function() {
	
		// when the request.readyState is 4, it means that the operation of recieving the response is over (see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
		// if the status of the response is 200, it means that the response was successfully recieved
		if (request.readyState == 4 && request.status == 200) {
			// the text content of the response
			let text = request.responseText
			
			alert("The content of the code is\n" + text)
			// render the text between the body tags to the screen
			document.querySelector(".github-content").innerHTML = text.slice(text.indexOf("<body>") + 6, text.indexOf("</body>"))
		}
	}
	
	// open a request
	request.open("GET", url)
	// send the request
	request.send()
}