function validate() {
	var value = document.getElementById("password-entry").value;
    console.log(value);
	if (value == "143ILY0oct747084") {
		document.getElementById("password-entry").innerHTML = "";
		window.open("https://michaelsbday.github.io/gallery.html");
	} else {
		document.getElementById("password-entry").innerHTML = "";
        alert("Password is wrong!");
		return false;
	}
}
