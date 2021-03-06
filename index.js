function opensidenav(){
  document.querySelector(".sidenav").style.width = "68%";
  document.querySelector(".sidenav").style.left = "0";
  document.querySelector(".overlay").classList.toggle("blurred");
}
document.querySelector(".sidenavbtn").addEventListener("click", opensidenav);

function closesidenav(){
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector(".sidenav").style.left = "-50px";
  document.querySelector(".overlay").classList.toggle("blurred");
}

document.querySelector(".closebtn").addEventListener("click", closesidenav);
document.querySelector(".overlay").addEventListener("click", closesidenav);
// Carousel Funcionality

var count = 1

document.querySelector(".caro-nxt").addEventListener("click", function () {
  count++;
  if (count > 4) {
    count = 4;
  }
  var currentImg = "images/image-product-"+ count +".jpg";
  document.querySelector(".caro-img").setAttribute("src", currentImg);

});

document.querySelector(".caro-prev").addEventListener("click", function () {
  count--;
  if (count<1) {
    count=1;
  }
  var currentImg = "images/image-product-"+ count +".jpg";
  document.querySelector(".caro-img").setAttribute("src", currentImg);
});
// END

// Pricing Calc
var units = document.querySelector(".no-of-itms").innerHTML;

// add-itm
document.querySelector(".add-itm").addEventListener("click", function () {
  units++;
  document.querySelector(".no-of-itms").innerHTML = units;
})

// Rmv--itms
document.querySelector(".rmv-itm").addEventListener("click",function () {
  units--;
  if (units<0) {
    units=0
  }
  document.querySelector(".no-of-itms").innerHTML = units;
})
// Cart
// View Cart

function cartToggle() {
  var cart = document.querySelector(".cart-div");
  if (cart.style.display == "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}

document.querySelector(".cart-counter").addEventListener("click", cartToggle);

// Add to Carts
function addToCart() {
  var price = 125.00;
  var totalUnits = units
  document.querySelector(".empty-note").style.display ="none";
  document.querySelector(".item-pack").style.display ="flex";
  document.querySelector(".checkout-btn-div").style.display ="block";
  // Items Counter
  document.querySelector(".counter").style.display ="block";
  document.querySelector(".counter").innerHTML =totalUnits;
  // Price Calc
  document.querySelector(".itp-unit").innerHTML = " " + totalUnits + " ";
  document.querySelector(".itp-sub-ttl").innerHTML = " $" + price * totalUnits + ".00";
  // Reset units counter
  document.querySelector(".no-of-itms").innerHTML = 0;
}

document.querySelector(".add-btn").addEventListener("click", addToCart);

// Remove Carts
function removeItem() {
  document.querySelector(".item-pack").style.display ="none";
  document.querySelector(".checkout-btn-div").style.display ="none";
  document.querySelector(".empty-note").style.display ="block";
}

document.querySelector(".del-itp-btn").addEventListener("click", removeItem);
