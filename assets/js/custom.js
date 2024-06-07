"use strict";

// link to the

const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const body = document.querySelector("body");

function openContactModal(e) {
  e.preventDefault();
  contactModal.setAttribute("aria-modal", "true");
  contactModal.removeAttribute("aria-hidden");
  contactModal.setAttribute("role", "dialog");
  contactModal.style.display = "block";
  contactModal.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
  contactModal.classList.add("show");
  body.classList.add("modal-open");
  body.style.overflow = "hidden";
  body.style.paddingRight = "15px";
}

// open categories

const categories = document.querySelectorAll("#categories");

categories.forEach((category) => {
  category.parentElement.addEventListener("click", (e) => {
    e.preventDefault();
    category.classList.toggle("show");
  });
});

// magnifying glass

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  const imgSrc = img.getAttribute("data-src");
  glass.style.backgroundImage = "url('" + imgSrc + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize =
    img.width * zoom + "px " + img.height * zoom + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - w / zoom) {
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /*set the position of the magnifier glass:*/
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition =
      "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.scrollX;
    y = y - window.scrollY;
    return { x: x, y: y };
  }
}

magnify("colorPalet", 3);
