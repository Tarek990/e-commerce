let allproducts = document.querySelector(".allproducts")
let products = [
    {
        id :1 ,
        imgurl : "images/grap.jpg",
        title : "Phone Case",
        price : "price : 150$",
        category : "category  : accessories",
    },
    {
        id :2 ,
        imgurl : "images/carcharger.jpg",
        title : "car charger",
        price : " price : 130$",
        category : "category  : accessories",
    }
    ,
    {
        id :3 ,
        imgurl : "images/earbuds.jpg",
        title : "Earbuds",
        price : "price : 250$",
        category : "category  : accessories",
    }
    ,
    {
        id :4 ,
        imgurl : "images/headphone.jpg",
        title : "headphone",
        price : "price : 100$",
        category : "category  : accessories",
    }
     ,
    {
        id :5 ,
        imgurl : "images/jbl.jpg",
        title : "JBL headphone",
        price : "price : 180$",
        category : "category  : accessories",
    }
     ,
    {
        id :6 ,
        imgurl : "images/mouse.jpg",
        title : "mouse",
        price : "price : 80$",
        category : "category  : accessories",
    }
     ,
    {
        id :7 ,
        imgurl : "images/power bank.jpg",
        title : "Power Bank",
        price : "price : 90$",
        category : "category  : accessories",
    }
     ,
    {
        id :8 ,
        imgurl : "images/smartwatch.jpg",
        title : "smart watch",
        price : "price : 250$",
        category : "category  : accessories",
    }
     ,
    {
        id :9 ,
        imgurl : "images/watch.jpg",
        title : "watch",
        price : "price : 450$",
        category : "category  : accessories"
    }
]

function drawitems(){
   let y = products.map( item => {
       return `<div class="allproducts d-flex justify-content-between">
                    <div class="card " style="width:350px ; ">
                        <img class="card-img-top" src="${item.imgurl}" alt="" height="300px">
                        <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="card-text fs-5">${item.price}</p>
                            <p class="fs-5">${item.category}</p>
                            <i class="fas fa-heart fs-4 "></i>
                            <button class="btn btn-primary" onclick="addtocard(${item.id})">add to card</button>
                        </div>
                    </div>
                </div>`
    })
    .join('')
    allproducts.innerHTML = y
}
 drawitems()

/////////////////////////////////////////////////
 let title = document.querySelector(".title")

 title.addEventListener("click",function(){
    window.location = "index.html"
 })
////////////////////////////////////////////////////////////////////////
let userinfo = document.querySelector(".userinfo")
let divuser = document.querySelector(".user")
let username = document.querySelector(".username")

if(localStorage.getItem("first name")){
    userinfo.style.display = "none"
    divuser.style.display = "block"
   let y = localStorage.getItem( "first name")
   username.innerHTML = "hello " + y
}else{
    userinfo.style.display = "block"
    divuser.style.display = "none"
}

let logout = document.querySelector(".logout")

logout.addEventListener("click",function(){
    localStorage.clear()
    userinfo.style.display = "block"
    divuser.style.display = "none"
})



///////////////////////////////////////////////////////////////////////////////////////////////////
let addtocardbtn = document.querySelector(".btn-primary")
let cartproducts = document.querySelector(".cartproducts ")
let deletebtn = document.querySelector(".deletebtn")
let cartcount = document.querySelector(".cartcount")

let addeditem = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : []


function addtocard(id){
    if(localStorage.getItem("email")){
        let choosenitem = products.find((item)=> item.id == id) 
        cartproducts.innerHTML += `<p>${choosenitem.title}</p>`
        
        addeditem = [...addeditem , choosenitem]
        localStorage.setItem("productsincart",JSON.stringify(addeditem))
        let cartsproductslength = document.querySelectorAll(".cartproducts p")
        cartcount.style.display = "block"
        cartcount.innerHTML = cartsproductslength.length

    }else{
        window.location = "register.html"
        
    }
}
//////////////////////////////////////////////////
let favitem = document.querySelectorAll(".fs-4"); 

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favitem.forEach((heart) => {
    let productId = heart.dataset.id; 

    if (favorites.includes(productId)) {
        heart.style.color = "red";
    }

    heart.addEventListener("click", function () {
        if (favorites.includes(productId)) {
            favorites = favorites.filter(id => id !== productId);
            heart.style.color = "black";
        } else {
            favorites.push(productId);
            heart.style.color = "red";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});

//////////////////////////////////////////////////////////////

let links2 = document.querySelector(".links2")
let viewcart = document.querySelector(".viewcart")
let iconcart = document.querySelector(".carticon")
let cartsproductslength = document.querySelectorAll(".cartproducts p")
// links2.style.display = "none"

iconcart.addEventListener("click",function(){
    if(cartsproductslength.innerHTML === ""){
        links2.style.display = "none"
    }else{
        links2.style.display = "block"
    }
    })


let searchInput = document.querySelector(".search");
let productssearch = document.querySelectorAll(".allproducts .card");

searchInput.addEventListener("keyup", function() {
    let value = searchInput.value.toLowerCase(); 
    
    productssearch.forEach((product) => {
        let title = product.querySelector(".card-title").textContent.toLowerCase();
        let category = product.querySelector(".fs-5").textContent.toLowerCase(); 

        
        if(title.includes(value)|| category.includes(value)) {
            product.style.display = "block"; 
        } else {
            product.style.display = "none"; 
        }
    });
});


///////////////////////////////////////////////////////////////


