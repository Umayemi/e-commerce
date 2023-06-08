
let Img = document.querySelector("#items-image");
let cartBox = document.querySelector("#cart-box")
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let rating = document.querySelector("#rating");
let wrapper = document.querySelector("#wrapper");
let items = document.querySelector(".items");
const starTotal = 5;
let excel = document.querySelector("#excel");
const men = document.querySelector(".grouping1");
const subtotalValue = document.querySelector("#checkout");
const times = document.querySelector("#times");
const hamburger = document.querySelector("#categories1");
const option=()=>{
    hamburger.style.left = "0px";
    times.style.display = "block"

}
const multiply=()=>{
    hamburger.style.left = "-250px";
    times.style.display = "none"
}
const category = document.querySelector("#grouped");
let products = null;
let newItem = JSON.parse(localStorage.getItem("data")) || [];
const fetchData = async () => {
    let url = "https://fakestoreapi.com/products";
    let res = await fetch(url);
    data = await res.json().then((response)=>{
        products =response;
        ;
    });
    const populate = ()=>{
        wrapping.innerHTML= products.map((x)=>{
            let rate = x.rating.rate;
            let ratePercentage = ((rate)/5)*100;
            let ratePercentageRounded = `${Math.round(ratePercentage/10)*10}%`
            console.log(ratePercentageRounded);
            return  ` <div id="product-design">
            <div id="product-image"><img src="${x.image}" alt="" class="images" onclick="singleProduct(${x.id})"></div>
            <div id="description"><p>${x.title}</p></div>
            <div id="price_cart">
                <div ><p id="prices">$${x.price}</p></div>
                <div id="add_cart" onclick="cartShopping(${x.id})"> <i class="fa fa-shopping-cart fa" aria-hidden="true" ></i></div>
            </div>
        </div>`
        }).join("");   
    }
    populate();
    multiply();
      
};
fetchData();
const searchFunction =()=>{
        let search = document.querySelector("#search-input");
       
        let searchValue = (search.value).toLowerCase();
        const searchResult = products.filter((product)=>{
            const name = product.title.toLowerCase();
            const category = product.category.toLowerCase();
            return name.includes(searchValue) || category.includes(searchValue);
        })
        if (searchResult.length === 0) {
            search.placeholder = "No result found";
        }
        else{
            search.placeholder = `${searchResult.length} products found`;
            console.log(searchResult);
            wrapping.innerHTML= searchResult.map((x)=>{
                return  ` <div id="product-design">
                <div id="product-image"><img src="${x.image}" alt="" class="images" onclick="singleProduct(${x.id})"></div>
                <div id="description"><p>${x.title}</p></div>
                <div id="price_cart">
                <div ><p id="prices">$${x.price}</p></div>
                <div id="add_cart" onclick="cartShopping(${x.id})"> <i class="fa fa-shopping-cart fa" aria-hidden="true" ></i></div>
                </div>
                </div>`
            }).join(""); 
        }
        search.value = '';
        
}
const menStore = async ()=>{
    let url = "https://fakestoreapi.com/products/category/men's clothing";
    let res = await fetch(url);
    data =  await res.json().then((response)=>{
        products =response;
    });
    const men =()=>{
        wrapping.innerHTML= products.map((x)=>{
            return  ` <div id="product-design">
            <div id="product-image"><img src="${x.image}" alt="" class="images" onclick="singleProduct(${x.id})"></div>
            <div id="description"><p>${x.title}</p></div>
            <div id="price_cart">
                <div ><p id="prices">$${x.price}</p></div>
                <div id="add_cart" onclick="cartShopping(${x.id})"> <i class="fa fa-shopping-cart fa" aria-hidden="true" ></i></div>
            </div>
        </div>`
        }).join(""); 
    }
    men();
    multiply();
}
const fetchJewelery = async ()=>{
    let url = "https://fakestoreapi.com/products/category/jewelery";
    let res = await fetch(url);
    data =  await res.json().then((response)=>{
        products =response;
    });
    const jewelery =()=>{
        wrapping.innerHTML= products.map((x)=>{
            return  ` <div id="product-design">
            <div id="product-image"><img src="${x.image}" alt="" class="images" onclick="singleProduct(${x.id})"></div>
            <div id="description"><p>${x.title}</p></div>
            <div id="price_cart">
                <div ><p id="prices">$${x.price}</p></div>
                <div id="add_cart" onclick="cartShopping(${x.id})"> <i class="fa fa-shopping-cart fa" aria-hidden="true" ></i></div>
            </div>
        </div>`
        }).join(""); 
    }
    jewelery();
    multiply();
};
const electronics = async ()=>{
    let url = "https://fakestoreapi.com/products/category/electronics";
    let res = await fetch(url);
    data =  await res.json().then((response)=>{
        products =response;
    });
    const gadget =()=>{
        wrapping.innerHTML= products.map((x)=>{
            return  ` <div id="product-design">
            <div id="product-image"><img src="${x.image}" alt="" class="images" onclick="singleProduct(${x.id})"></div>
            <div id="description"><p>${x.title}</p></div>
            <div id="price_cart">
                <div ><p id="prices">$${x.price}</p></div>
                <div id="add_cart" onclick="cartShopping(${x.id})"> <i class="fa fa-shopping-cart fa" aria-hidden="true" ></i></div>
            </div>
        </div>`
        }).join(""); 
    }
    gadget();
    multiply();
}

const womenStore = async ()=>{
    let url = "https://fakestoreapi.com/products/category/women's clothing";
    let res = await fetch(url);
    data =  await res.json().then((response)=>{
        products =response;
    });
    const women =()=>{
        wrapping.innerHTML= products.map((x)=>{
            return  ` <div id="product-design">
            <div id="product-image"><img src="${x.image}" alt="" class="images" onclick="singleProduct(${x.id})"></div>
            <div id="description"><p>${x.title}</p></div>
            <div id="price_cart">
                <div ><p id="prices">$${x.price}</p></div>
                <div id="add_cart" onclick="cartShopping(${x.id})"> <i class="fa fa-shopping-cart" aria-hidden="true" ></i></div>
            </div>
        </div>`
        }).join(""); 
    }
    women();
    multiply();
};
let product = null
const singleProduct = (id)=>{
    localStorage.setItem("id", id)
    window.location.href = "single.html";
}

const fetchProduct = async() => {
    let id = localStorage.getItem("id")
    let url = `https://fakestoreapi.com/products/${id}`;
    let res = await fetch(url);
    data =  await res.json().then((response)=>{
        product =response;
    });   
    excel.innerHTML = `   <div id="single-description">
    <img src="${product.image}" alt="" id="single-image">
    <div id="desc-text">
    <p class="single-title">${product.title}</p>
    <p class="single-desc">${product.description}</p>
    <div id="desc_price_cart">
        <div ><p id="prices-single">Price: $${product.price}</p></div>
        <div id="add_cart-single" onclick="cartShopping(${product.id})"> <i class="fa fa-shopping-cart fa" aria-hidden="true" ></i></div>
    </div>
    </div>`;
}

fetchProduct()
let cartShopping=(id)=>{
    if (newItem.some((selectedItems)=>selectedItems.id === id)) {
         changeQuantity("plus",id);
    }
    else {
        let selectedItems = products.find(item => (item.id === id));
    newItem.push({
        ...selectedItems,
        quantity : 1, 
    });
    }
    localStorage.setItem("data",JSON.stringify(newItem));
    calculation();
    cartItems();
    }

let calculation =()=>{
    items.innerHTML = newItem.length;
}
calculation();
let cartButton=()=>{
    window.location.href = "cart.html";   
    localStorage.setItem("data",JSON.stringify(newItem));
}
let cartSection = document.querySelector("#cart-section");
let running=()=>{
    console.log(newItem)
    if (newItem.length == 0) {
        cartSection.innerHTML =` <div id="empty-cart">
        <div id="empty-cart">
            <i class="fa fa-cart-arrow-down fa-3x" aria-hidden="true"></i>
        </div>
        <p class="empty-test">Your cart is empty! </p>
        <p class="empty-test">Browse our categories and discover our best deals</p>
        <a href="index.html"><button id="empty-button">START SHOPPING</button>
    </div>`
    }
}

let cartItems=()=>{
    cartBox.innerHTML= newItem.map((x)=>{
    return `<div class="image-price">
    <div id="image-contained">
        <img src="${x.image}" alt="" class="cart-image">
        <p id="cart-title">${x.title}</p>
    </div>
    <div>
        <p id="cart-price">$${x.price}</p>
    </div>
</div>
<div class="delete-quantity">
    <div id="remove-btn" onclick="removeItem(${x.id})">
        <i class="fa fa-trash" aria-hidden="true"></i>
        <p>REMOVE</p>
    </div>
    <div class="quantity">
        <div class="btn-minus" onclick="changeQuantity('minus',${x.id})" >-</div>
        <div class="quan-num">${x.quantity}</div>
        <div class="btn-plus" onclick="changeQuantity('plus',${x.id})">+</div>
    </div>
</div>
<div id="empty-line"></div>
         `
}).join("");  
localStorage.setItem("data",JSON.stringify(newItem));
calculation() ;
running();
}
let changeQuantity=(action,id)=>{      
    newItem = newItem.map((item)=>{
        let quantity = item.quantity;
        if (item.id === id) {
            if (action === "minus" && quantity>1) {
                quantity--;
            } 
            else if (action === "plus") {
                quantity++;
           }
        }
        return{
            ...item,
            quantity,
        }
    });
    cartItems();
    localStorage.setItem("data",JSON.stringify(newItem));  
    subtotal();
}
let subtotal=()=>{
    let totalPrice = 0;
    let totalItems = 0;
    newItem.map(item => {
        totalPrice += item.price*item.quantity;
        let roundedTotalPrice= totalPrice.toFixed(2)
        totalItems += item.quantity;
        subtotalValue.innerHTML = `<div id="check-text1">
        <p>CART SUMMARY</p>
        </div>
        <div id="check-text2">
            <p>Subtotal</p>
            <p>$${roundedTotalPrice}</p>
        </div>
        <a href="login.html"><button id="check-btn">checkout</button></a>`
    });
    localStorage.setItem("data",JSON.stringify(newItem));  
    cartItems();
    if (newItem.length == 0) {
        subtotalValue.innerHTML = ""
    }
    console.log(newItem);
}
subtotal();
let removeItem=(id)=>{
    let selectedItems = id;
    newItem = newItem.filter((x)=>x.id !== selectedItems);
    localStorage.setItem("data",JSON.stringify(newItem));  
    cartItems();
    subtotal();
    running();
};


