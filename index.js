//VARIABLES
const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const email = document.querySelector("#email");
const tel = document.querySelector('#tel');
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

let pattern = /([0-9]{2}(\s|\.|\-)){4}[0-9]{2}\b/;
//=================//
tel.addEventListener("input", function(){
    if(!pattern.test(tel.value)){
        tel.setCustomValidity("Mauvais format");
    }tel.setCustomValidity("");
})
passwordConfirm.addEventListener("input", function(){
    if(password.value != passwordConfirm.value){
        passwordConfirm.setCustomValidity("Passwords match pas");
    }else{
    passwordConfirm.setCustomValidity("");}
})

function showError(){

}