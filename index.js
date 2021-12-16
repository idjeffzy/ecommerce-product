function opensidenav(){
  document.querySelector(".sidenav").style.width = "68%";
  document.querySelector(".sidenav").style.left = "0";

}
document.querySelector(".sidenavbtn").addEventListener("click", opensidenav);

function closesidenav(){
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector(".sidenav").style.left = "-50px";
}

document.querySelector(".closebtn").addEventListener("click", closesidenav);

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
var count = document.querySelector(".no-of-itms").innerHTML;

// add-itm
document.querySelector(".add-itm").addEventListener("click", function () {
  count++;
  document.querySelector(".no-of-itms").innerHTML = count;
})

// Rmv--itms
document.querySelector(".rmv-itm").addEventListener("click",function () {
  count--;
  if (count<0) {
    count=0
  }
  document.querySelector(".no-of-itms").innerHTML = count;
})
