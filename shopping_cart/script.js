const products=[
    {
        id:1,name:"laptop",
        price:50000
    },
    {
        id:2,
        name:"mouse",
        price:800
    },
    {
        id:3,
        name:"keyboard",
        price:1500
    },
    {
        id:4,
        name:"headphone",
        price:2000
    }
];
let cart=[];
const productsContainer=document.querySelector("#products");
const cartContainer=document.querySelector("#cart");
const totalElement=document.querySelector("#total");

function displayProducts(){
    productsContainer.innerHTML="";
    products.forEach(product=>{
        productsContainer.innerHTML+=`
        <div class="product">
            <h3>${product.name}</h3>
            <p>$ ${product.price}</p>
            <button onclick="addToCart(${product.id})">
            Add to Cart
            </button>
            </div>
        `;
    });
}
function addToCart(productId){
    const selectedProduct=products.find(
        product=>product.id===productId
    );

    const cartItem=cart.find(
        product=>product.id===productId
    );
    
    if(cartItem){
        cartItem.quantity++;
    }else{
        cart.push({
            ...selectedProduct,
            quantity:1
        });
    }
    displayCart();
}
function displayCart(){
    cartContainer.innerHTML="";
    let total=0;
    cart.forEach(item=>{
        const itemtotal=item.price*item.quantity;
        total+=itemtotal;
        cartContainer.innerHTML+=`
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <p>$ ${item.price}x${item.quantity}</p>
          </div>
            <button onclick="removeFromCart(${item.id})">
             Remove</button>
          </div>  
        `;
    });
    totalElement.textContent=total;
}
function removeFromCart(productId){
    cart=cart.filter(
        product=>product.id!==productId
    );
    displayCart();
}
displayProducts();
displayCart();