// SCROLL HIGHLIGHT & MENU TOGGLE
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

// RESERVATION FORM SUBMISSION
const reservationForm = document.querySelector(".reservation form");

if (reservationForm) {
    reservationForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(reservationForm);

        try {
            const response = await fetch(reservationForm.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showAlert("✅ Reservation sent successfully! Thank you.", "success");
                reservationForm.reset();
            } else {
                showAlert("❌ Something went wrong. Please try again later.", "error");
            }
        } catch (error) {
            showAlert("❌ Network error. Please try again later.", "error");
            console.error(error);
        }
    });
}

// ALERT FUNCTION (MATCHES CSS)
function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `custom-alert ${type}`; 

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 4000);
}
