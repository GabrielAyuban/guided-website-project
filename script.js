// Function to show popup
function showPopup() {
    alert("Thank you! Your recommendation has been submitted.");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("recommendationForm");
    const recommendationsSection = document.getElementById("recommendations");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // prevent form from submitting
            showPopup(); // show confirmation popup

            const name = form.name.value;
            const message = form.recommendation.value;

            // Create new recommendation div
            const newRec = document.createElement("div");
            newRec.classList.add("recommendation");
            newRec.innerHTML = `<p>"${message}"</p>`;

            // Append new recommendation
            recommendationsSection.appendChild(newRec);

            // Reset form fields
            form.reset();
        });
    }
});
