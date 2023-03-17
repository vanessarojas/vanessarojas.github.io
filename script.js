const contactBtn = document.getElementById("contact-btn");
const closeBtn = document.getElementById("close-btn");
const contactPopup = document.getElementById("contact-popup");

contactBtn.addEventListener("click", () => {
	contactPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
	contactPopup.style.display = "none";
});
