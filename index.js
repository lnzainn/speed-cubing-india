// Smooth Transition Effect for Navigation
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !href.includes("mailto:")) {
                e.preventDefault(); // Prevent default navigation
                document.body.style.animation = "fadeOut 0.5s ease-in-out"; // Apply fade-out animation
                setTimeout(() => {
                    window.location.href = href; // Navigate after animation ends
                }, 500); // Match animation duration
            }
        });
    });
});
