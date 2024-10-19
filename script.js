window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var navlinks = document.querySelectorAll('.nav-link');
    if (window.scrollY > 650) {
        header.classList.add('scrolled');
        navlinks.forEach(function(navlink) {
            navlink.classList.add('scrolled');
        });
    } else {
        header.classList.remove('scrolled');
        navlinks.forEach(function(navlink) {
            navlink.classList.remove('scrolled');
        });
    }
});

function hamburger(){
    var menu = document.getElementById("mobile_nav_bar");
    var logo = document.getElementById("header__container");
    if (menu.style.display === "none" && logo.style.display === "flex"){ 
        menu.style.display = "block";
        menu.style.zIndex = "100"
        logo.style.display = "none";

        document.addEventListener('click', outsideClickListener);
    } else {
        menu.style.display = "none";
        logo.style.display = "flex";
        
        document.addEventListener('click', outsideClickListener);
    }
}

function outsideClickListener(event) {
    var menu = document.getElementById("mobile_nav_bar");
    var hamburgerIcon = document.querySelector('.menu-icon');

    
    if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        menu.style.display = "none";
        document.getElementById("header__container").style.display = "flex";  
        document.removeEventListener('click', outsideClickListener);  
    }
}

// FORMS - BOOKING PAGE
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.table-prices tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', function() {
            rows.forEach(r => r.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    document.querySelectorAll('.package-select').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.package-select').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    const bookingForm = document.getElementById('booking-form');
    const submitForm = document.getElementById('submit-form');
    const confirmationMessageDiv = document.getElementById('confirmation-message');

    submitForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (bookingForm.checkValidity()) {
        const email = document.getElementById('email').value;
        const fromCountry = document.getElementById('from-country').value;
        const toCountry = document.getElementById('to-country').value;

        const confirmationMessage = `Thank you for booking! 
        Your email: ${email}, 
        From: ${fromCountry}, 
        To: ${toCountry}`;

        confirmationMessageDiv.textContent = confirmationMessage;
        confirmationMessageDiv.style.display = 'block';

        setTimeout(() => {
            confirmationMessageDiv.style.display = 'none';
        }, 5000);

        bookingForm.reset();
        rows.forEach(row => row.classList.remove('selected'));
        document.querySelectorAll('.package-select').forEach(btn => btn.classList.remove('selected'));
    } else {
        bookingForm.reportValidity();
    }
});

    resetButton.addEventListener('click', function() {
        bookingForm.reset();

        // Reset selected rows
        rows.forEach(row => row.classList.remove('selected'));

        // Reset selected package buttons
        document.querySelectorAll('.package-select').forEach(btn => btn.classList.remove('selected'));
    });
});