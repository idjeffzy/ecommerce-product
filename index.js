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
