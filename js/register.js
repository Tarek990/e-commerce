let registerbtn = document.querySelector(".register-btn");
let fname = document.querySelector(".fname-input");
let lname = document.querySelector(".lname-input");
let email = document.querySelector(".email-input");
let password = document.querySelector(".password-input");

registerbtn.addEventListener("click",function(e){
    e.preventDefault();

   if(fname.value === "" || lname.value === "" || email.value === "" || password.value === ""){
    alert("all fields are required")
   }else{
        alert("account created successfully")
        localStorage.setItem("first name" , fname.value);
        localStorage.setItem("last name" , lname.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password",password.value);

        setTimeout(() => {
            window.location = "login.html"
        },1500)
   }
    
})
//////////////////////////////////////
 let title = document.querySelector(".title")

 title.addEventListener("click",function(){
    window.location = "index.html"
 })

 