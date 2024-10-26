document.getElementById('recommendation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form
    const name = document.getElementById('name').value.trim();
    const role = document.getElementById('role').value.trim();
    const quote = document.getElementById('quote').value.trim();

    // Validate the input
    if (!name || !role || !quote) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Create a new recommendation item
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation-item');
    newRecommendation.innerHTML = `
        <p class="quote">"${quote}"</p>
        <p class="author">- ${name}, ${role}</p>
    `;

    // Add the new recommendation to the recommendations container
    const recommendationsContainer = document.querySelector('.recommendations-container');
    recommendationsContainer.appendChild(newRecommendation);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('quote').value = '';

    // Scroll to the newly added recommendation
    newRecommendation.scrollIntoView({ behavior: 'smooth' });

    // Display a pop-up message to confirm the recommendation has been added
    alert('Thank you! Your recommendation has been successfully added.');
});
