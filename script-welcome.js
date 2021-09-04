function validate() {
	var value = document.getElementById("password-entry").value;
    console.log(value);
	if (value == "143ILY0oct747084") {
		window.open("https://michaelsbday.github.io/gallery.html");
		document.getElementById("password-entry").innerHTML = "";
	} else {
        alert("salah");
		return false;
	}
}
