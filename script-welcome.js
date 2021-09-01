
// function validateForm(){
// var password = document.forms["pwForm"]["password"].value;
// var key = "honeybee"
//   console.log(password);
//   if (password == key){
//       document.location.href = "countdown.html";
//   } else {
//       if(password == ""){
//             alert("Password cannot be empty!")
//       } else {
//             alert("Password is incorrect!")
//       }
//       return false; 
//   }
// }

// function validateForm(){
//     var pw = document.getElementById("password-entry").value;
//     if(pw == "honeybee"){
//         document.location.href="google.com"
//     }
// }

// function CheckPassword(inputtxt) 
// { 
//     var passw =  "honeybee"
//     if(inputtxt.value.match(passw)) 
//     { 
//         // alert('Correct, try another...')
//         // location.href = "http://stackoverflow.com"
//         // window.location = "http://google.com";
//         window.location.href = "https://www.example.com";
        

//         // return true;
//     }
//     else
//     { 
//         alert('Wrong...!')
//         // return false;
//         return false;
//     }
    

    
// }


function validate() {
	var value = document.getElementById("password-entry").value;
    console.log(value);
	if (value == "hon") {
		// window.location.href = "https://www.google.com/";
        window.open("https://www.w3schools.com");
        document.getElementById("password-entry").innerHTML = "";

	} else {
        alert("salah");
		return false;
	}
}