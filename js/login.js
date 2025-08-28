 let title = document.querySelector(".title")

 title.addEventListener("click",function(e){
    e.preventDefault();
    setTimeout(() => {
        window.location = "index.html"
    },1000)
 })

 let email = document.querySelector(".email-login")
 let password = document.querySelector(".pass-login") 
 let loginbtn = document.querySelector(".btn-primary")

loginbtn.addEventListener("click",function(e){
    e.preventDefault()
    if(password.value.trim()=== localStorage.getItem("password").trim() && email.value.trim() ===localStorage.getItem("email").trim() ){
        alert("login successfully")
        setTimeout(() => {
            window.location = "index.html"
        },1500)
    }else{
        alert("please enter the correct Data")
    }
})