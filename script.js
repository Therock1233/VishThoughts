// Function to show the selected section when a button is clicked
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Event listeners for buttons in the navigation
document.getElementById('homeBtn').addEventListener('click', function () {
    showSection('home');
});

document.getElementById('aboutMeBtn').addEventListener('click', function () {
    showSection('aboutMe');
});
document.getElementById('articlesBtn').addEventListener('click', function () {
    showSection('articles');
});

document.getElementById('contactBtn').addEventListener('click', function () {
    showSection('contact');
});
document.getElementById('feedbackBtn').addEventListener('click', function () {
    showSection('feedback');
});
// Function to handle the feedback submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const rating = document.querySelector('input[name="rating"]:checked');
    const feedbackText = document.getElementById('feedbackText').value;

    // Check if rating and feedback are provided
    if (rating && feedbackText !== "") {
        // Get the selected rating value
        const ratingValue = rating.value;
        let ratingDescription = "";

        // Set description based on rating value
        switch (ratingValue) {
            case "5":
                ratingDescription = "Excellent! Your rating: Exceptional";
                break;
            case "4":
                ratingDescription = "Outstanding! Your rating: Remarkable";
                break;
            case "3":
                ratingDescription = "Good! Your rating: Superb";
                break;
            case "2":
                ratingDescription = "Fair! Your rating: Satisfactory";
                break;
            case "1":
                ratingDescription = "Poor! Your rating: Needs Improvement";
                break;
            default:
                ratingDescription = "No rating provided.";
        }
// Show the thank you message
document.getElementById('thankYouMessage').style.display = "block";

// Display the rating and feedback
document.getElementById('userRating').innerHTML = "Rating: " + ratingDescription;
document.getElementById('userFeedbackText').innerHTML = "Feedback: " + feedbackText;
// Show the feedback section with the submitted data
document.getElementById('userFeedback').style.display = "block";

// Reset the form after submission
document.getElementById('feedbackForm').reset();
} else {
alert("Please provide both a rating and feedback.");
}
});
