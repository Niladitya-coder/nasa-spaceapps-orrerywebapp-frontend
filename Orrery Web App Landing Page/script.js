document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');

    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default action

        button.classList.add('burst');

        // Remove the button after animation completes
        setTimeout(() => {
            button.style.display = 'none'; // Hide button
        }, 600); // Match duration with CSS animation
    });
});

