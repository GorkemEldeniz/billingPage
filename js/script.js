const aside = document.querySelector("aside");
const openBtn = document.querySelector("main > span");
const closeBtn = document.querySelector("aside > span");

openBtn.addEventListener("click", (e) => {
	aside.classList.add("toggle-on");
	openBtn.classList.add("icon-hide");
});

closeBtn.addEventListener("click", (e) => {
	aside.classList.remove("toggle-on");
	openBtn.classList.remove("icon-hide");
});
