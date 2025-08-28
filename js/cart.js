let allproducts = document.querySelector(".cart-container")
let productsincart = localStorage.getItem("productsincart")

if(productsincart){
    let item = JSON.parse(productsincart)
    drawitems(item)
}

function drawitems(item){
    let y = item.map(item => {
        return `<div class="allproducts d-flex justify-content-between">
                    <div class="card" style="width:350px;">
                        <img class="card-img-top" src="${item.imgurl}" alt="" height="300px">
                        <div class="card-body">
                            <h4 class="card-title">${item.title}</h4>
                            <p class="card-text fs-5">${item.price}</p>
                            <p class="fs-5">${item.category}</p>
                            <i class="fas fa-heart fs-4 add-to-love"></i>
                            <button class="btn btn-danger remove-btn" data-id="${item.id}">Remove item</button>
                        </div>
                    </div>
                </div>`
    }).join('')
    allproducts.innerHTML = y

    // بعد ما نرسم المنتجات نغير شكل الأزرار كلها
    let rmvbtns = document.querySelectorAll(".remove-btn")
    rmvbtns.forEach(btn => {
        btn.addEventListener("click", function(){
            removeFromCart(this.dataset.id)
        })
    })
}

// دالة إزالة المنتج من الكارت
function removeFromCart(id){
    let productsincart = JSON.parse(localStorage.getItem("productsincart")) || []
    let updated = productsincart.filter(item => item.id != id)
    localStorage.setItem("productsincart", JSON.stringify(updated))
    drawitems(updated) // إعادة رسم الصفحة بعد الحذف
}

 let title = document.querySelector(".title")

 title.addEventListener("click",function(){
    window.location = "index.html"
 })