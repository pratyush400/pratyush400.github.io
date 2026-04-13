
let url = "https://github.com/pratyush400/pattern_2d.md"

window.onload = function() {

	let request = new XMLHttpRequest()

	request.onreadystatechange = function() {
	

		if (request.readyState == 4 && request.status == 200) {
			let text = request.responseText
			
			alert("The content of the code is\n" + text)
			document.querySelector(".github-content").innerHTML = text.slice(text.indexOf("<body>") + 6, text.indexOf("</body>"))
		}
	}
	
	request.open("GET", url)
	// send the request
	request.send()
}