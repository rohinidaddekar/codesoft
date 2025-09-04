let hamMenu = document.getElementById("ham-menu");
let closeBtn = document.getElementById("close");
let drawerElem = document.getElementById("drawer-menus");
let mobileMenuLinksElem = document.getElementsByClassName("mobile-menu-link");
let headerElem = document.getElementById("header");
hamMenu.addEventListener("click", function () {
  drawerElem.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  drawerElem.classList.remove("active");
});

Array.from(mobileMenuLinksElem).map((link, i) => {
  link.addEventListener("click", () => {
    if (drawerElem.classList.contains("active")) {
      drawerElem.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    headerElem.classList.add("sticky");
  } else {
    headerElem.classList.remove("sticky");
  }
});
