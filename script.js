// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// TECHNOLOGY SEARCH
const searchInput = document.getElementById("searchInput");
const techCards = document.querySelectorAll(".tech-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    techCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchValue)) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display =
        visibleCount === 0 ? "block" : "none";
});

// TECHNOLOGY POPUP
const modal = document.getElementById("techModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription =
    document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

const learnButtons = document.querySelectorAll(".learn-btn");

learnButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent =
            button.dataset.description;

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
        closeModal.focus();
    });
});

// CLOSE POPUP
function hideModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);

// CLOSE WHEN CLICKING OUTSIDE THE POPUP
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        hideModal();
    }
});

// CLOSE POPUP USING ESCAPE KEY
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        hideModal();
    }
});

// CONTACT FORM DEMO
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName =
        document.getElementById("visitorName").value.trim();

    if (visitorName === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + visitorName +
        "! Your message has been received in this demo.";

    contactForm.reset();
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();