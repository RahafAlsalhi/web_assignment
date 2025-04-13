function Validate(){
    const username=document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    const confirm=document.getElementById("confirm").value;
    let isValid = true;

    if(username===''){
        document.getElementById("errormessage1").textContent="Invalid User Name"
        isValid=false;
    }
    if(email===''){
        document.getElementById("errormessage2").textContent="Invalid email"
        isValid=false;
    }if(password===''){
        document.getElementById("errormessage3").textContent="Password cannot be empty"
        isValid=false;
    } if (confirm === '') {
        document.getElementById("errormessage4").textContent = "Please confirm your password";
        isValid = false;
      } else if (confirm !== password) {
        document.getElementById("errormessage4").textContent = "Passwords do not match";
        isValid = false;
      }
    return isValid;
}