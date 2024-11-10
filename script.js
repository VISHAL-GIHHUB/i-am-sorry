const noButton = document.getElementById("noButton");
const forgivenessMessage = document.getElementById("forgivenessMessage");

// Function to show the forgiveness message when "Yes" is clicked
function showForgivenessMessage() {
    forgivenessMessage.classList.remove("hidden");
    forgivenessMessage.style.opacity = 1;
}

// Function to move the "No" button to a random position when clicked
function moveNoButton() {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
