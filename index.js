var formSign = document.forms[0];
var passwd = document.getElementById("passcode1");
var mail = document.getElementById("email");
var pass2 = document.getElementById("passcode2");
var button = document.getElementById("sub-btn");
let outpt = document.getElementById("error")
let textv = document.getElementById("username");

function confirmPasscode(){
    if((pass2.value!=passwd.value)){
        outpt.innerHTML = "*password  miss-match"
        
    }else if((pass2.value|| passwd.value)==""){
        outpt.innerHTML = "*fill in all the areas";
    }else{
        outpt.innerHTML ="Thank you "+textv.value + " for joining us!"

    }
    localStorage.setItem(
        uname=username.value,
        localStorage.save()
    )
}

button.addEventListener("click", confirmPasscode, false)