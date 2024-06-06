"use strict";

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
