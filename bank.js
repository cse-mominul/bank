//Login Button 

document.getElementById("btn-login").addEventListener("click",function(){

    const userEmail = document.getElementById("email-input").value;
    const userPassword = document.getElementById("password-input").value;
    if(userEmail === "momin@gmail.com" && userPassword === "momin"){
        window.location.href="bank.html";
    }
    else{
        alert("Worng Email or Password");
    }

})

