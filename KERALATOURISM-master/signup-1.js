function validateName()
{

    var name= document.getElementById("name1").value;
    var error1= document.getElementById("error1");
    var letters = /^[A-Za-z]+$/;
    if(name=='')
    {
        error1.innerHTML="Name should not be empty";
        error1.style.color="red";
        name1.style.border="1.5px solid red";
        return false;
    }
    else if(!letters.test(name))
    {
        error1.innerHTML="Name should contain only letters";
        error1.style.color="red";
        name1.style.border="1.5px solid red";
        return false;
    }
    else(letters.test(name))
    {
        error1.innerHTML="";
        name1.style.border="1.5px solid green";
        return true;
           
    }
}
function validateEmail(){

    var email= document.getElementById("email1").value;
    var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+(.[a-zA-Z0-9]{2,4})?$/;
    var error2= document.getElementById("error2");
    if(email=='')
    {
        error2.innerHTML="Please type your email id";
        error2.style.color="red";
        email1.style.border="1.5px solid red";
        return false; 
    }
    else if (!mail.test(email))
    {
        error2.innerHTML="Invalid Email Id";
        error2.style.color="red";
        email1.style.border="1.5px solid red";
        return false;
    }
    else(mail.test(email))
    {
        error2.innerHTML="";
        email1.style.border="1.5px solid green";
        return true;
    }
}
function validatePhone(){

    var phone= document.getElementById("phone1").value;
    var error3= document.getElementById("error3");
    var num=/^([6-9]{1}[0-9]{9})$/;
    if(phone.length==0){
        error3.innerHTML="Please type phone number";
        error3.style.color="red";
        phone1.style.border="1.5px solid red";
        return false;
    }
    else if(!num.test(phone)){
        error3.innerHTML="Invalid phone number";
        error3.style.color="red";
        phone1.style.border="1.5px solid red";
        return false;   
    }
    else(num.test(phone))
    {
        error3.innerHTML="";
        phone1.style.border="1.5px solid green";
        return true;   
    }
}
// function validatePassword(){
//      var pwd= document.getElementById("password1").value;           
//      var cpwd= document.getElementById("password2").value;
//      var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
//      var error4= document.getElementById("error4");
//      var error6= document.getElementById("error6");
    
//      if(pwd=='')
//      {
//         error4.innerHTML="Please enter the password";
//         error4.style.color="red";
//         password1.style.border="1.5px solid red";
//         return false;
//     }  
//     else if(pwd_expression.test(pwd))
//     {
//         error4.innerHTML="";
//        password1.style.border="1.5px solid green";
//        return true;
//     }
//     else if(!pwd_expression.test(pwd))
//     {
//         error4.innerHTML="Upper case, Lower case, Special character and Numeric letter are required in Password filed";
//         error4.style.color="red";
//         password1.style.border="1.5px solid red";
//         return false;
//     }
// }   
// function validateform(){
//     var pwd= document.getElementById("password1").value;           
//     var cpwd= document.getElementById("password2").value;
//     var error5= document.getElementById("error5");
    
//     if(pwd != cpwd)
//     {
//         error5.innerHTML=" password not does not match";
//         error5.style.color="red";
//         password2.style.border="1.5px solid red";
//         return false;  
//     }
//     else{
//         alert("successfully logged in");
//     }
// }var form = document.getElementById("frmRegistration");




//password strength bar indicator parameters
var indicator = document.querySelector(".indicator");
var weak = document.querySelector(".weak");
var medium = document.querySelector(".medium");
var strong = document.querySelector(".strong");
var text = document.querySelector(".text");
var form = document.getElementById("frmRegistration");


function validatepwd(){

    var pass = document.getElementById("pass");
    var parent = pass.parentNode;
    var message = parent.querySelector("small");
   
        message.innerText = "";
        indicator.style.display="none";
        text.textContent="";


        if(pass.value.trim()==""){
           
            message.style.visibility = "visible";
            message.innerText = "Password cannot be empty";
            message.style.color="orange";
            check1.style.visibility="visible";
           
        }
    
        else {
            indicator.style.display="block";
            indicator.style.display="flex";
           
        }

        let regWeak = /(?=.*[a-z])/;
        let regMedium = /(?=.*\d)+/;
        let regStrong=/(?=.*[A-Z])/;

        if(pass.value.match(regWeak)||
            pass.value.match(regMedium)||
            pass.value.match(regStrong)) {

            //console.log("weak");
            levelone();
            
        }

        if((pass.value.match(regWeak) && pass.value.match(regMedium))||
           (pass.value.match(regMedium) && pass.value.match(regStrong))||
           (pass.value.match(regWeak) && pass.value.match(regStrong))) 
           {
            //console.log("medium");
            leveltwo();
           }
           else{
               leveltwofail();
           }
        
        if(pass.value.match(regWeak)&&
            pass.value.match(regMedium)&&
            pass.value.match(regStrong)) {

            //console.log("strong");
            levelthree();
       
        }else{
            levelthreefail();
        }
        
}
    function levelone(){
        
        var weak = document.querySelector(".weak");
        var text = document.querySelector(".text");

            weak.classList.add("active");
            text.style.display="block";
            text.textContent= "Your Password is too weak";
            text.classList.add("weak");
            //console.log("level1");
    }

    function leveltwo(){
            medium.classList.add("active");
            text.textContent= "Your Password is medium";
            text.classList.add("medium");
            //console.log("level2");
        }
    function leveltwofail(){
            medium.classList.remove("active");
            text.classList.remove("medium");
        }

    function levelthree(){
        var pass = document.getElementById("pass");
        var parent = pass.parentNode;
        var message = parent.querySelector("small");

        if(pass.value.length>7){
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent= "Your Password is strong";
            text.classList.add("strong");
        }
        else{
            message.style.visibility="visible";
            message.innerText="Password must contain atleast 8 characters";
            message.style.color="orange";
        }
    }

    function levelthreefail(){
        var pass = document.getElementById("pass");
        var parent = pass.parentNode;
        var message = parent.querySelector("small");
        

            strong.classList.remove("active");
            text.classList.remove("strong");
            message.innerText="";
           
            //indicator.style.display="none";
            //text.style.display="none";
    }
    




    function validateform(){
            var pwd= document.getElementById("pass").value;           
            var cpwd= document.getElementById("password2").value;
            var error5= document.getElementById("error5");
            
            if(pwd != cpwd)
            {
                error5.innerHTML=" password not does not match";
                error5.style.color="red";
                password2.style.border="1.5px solid red";
                return false;  
            }

        }

