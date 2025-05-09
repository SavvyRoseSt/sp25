let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("lenght");

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

myInput.onkeyup = function() {
let lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)){
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

let upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)){
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

let numbers = /[0-9]/g;
    if (myInput.value.match(numbers)){
        number.classList.remove("valid");
        number.classList.add("invalid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

   if (myInput.value.length >= 8){
        length.classList.remove("valid");
        lenght.classList.add("invalid");
    } else {
        lenght.classList.remove("valid");
        lenght.classList.add("invalid");
    }


}