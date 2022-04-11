let email= document.getElementById("email");
let error= document.getElementById("error");
let pswd= document.getElementById("pswd");
function validation(){
    let regexp= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.style.color="green";
        return password();
        
    }
    else{
        error.innerHTML="invalid email!";
        error.style.color="red";
        email.style.border="1.5px solid red";
       
        return false;
    }
}
function password(){
    if(pswd.value.trim().length>=8){
        pswd.style.border="1.5px solid green";    
        email.style.border="1.5px solid green";
        return true;

    }
        else{
                error2.innerHTML="Your password must be atleast 8 characters.";
                pswd.style.border="1.5px solid red";
                error2.style.color="red";
                return false;
            }
     

    }
    
    
    



