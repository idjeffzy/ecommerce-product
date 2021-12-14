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

// function nextImg() {
//   var count = 1;
//   var currentImg = "images\image-product-"+ count +".jpg";
//   document.querySelector("caro-img").setAttribute("src", currentImg);
//
//   count++;
// }

function changeImg() {
  document.querySelector(".caro-img").setAttribute("src", "images/image-product-2.jpg");
}

document.querySelector(".caro-nxt").addEventListener("click", changeImg);
