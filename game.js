// game.js

// Select all script buttons
const scriptButtons = document.querySelectorAll('.scriptButton');

// Get the redirect URL from each button's data-url attribute and navigate when clicked
scriptButtons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url'); // Get URL from button
        const confirmation = confirm("Do you want to visit this link?"); // Ask for user confirmation
        if (confirmation) {
            window.location.href = url; // Redirect if confirmed
        }
    });
});
