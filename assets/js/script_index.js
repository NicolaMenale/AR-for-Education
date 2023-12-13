// Variable to store the ID of the last visible marker
var lastMarker = null;

// Event listener to handle messages sent from the 'window' object
window.addEventListener('message', handleMessage);

// Function to handle incoming messages
function handleMessage(event) {
    // Extract the new marker ID from the received message
    var newMarkerId = event.data;

    // Hide the text of the previous marker if it exists
    if (lastMarker !== null) {
        // Retrieve the element corresponding to the last marker ID
        var elementToHide = document.getElementById(lastMarker);

        // Check if the element exists before attempting to hide it
        if (elementToHide) {
            // Set the display property to "none" to hide the element
            elementToHide.style.display = "none";
        }
    }

    // Retrieve the element corresponding to the new marker ID
    var elementToShow = document.getElementById(newMarkerId);

    // Check if the element exists before attempting to show it
    if (elementToShow) {
        // Set the display property to "block" to show the element
        elementToShow.style.display = "block";
    }

    // Update the ID of the last marker with the new marker ID
    lastMarker = newMarkerId;
}
