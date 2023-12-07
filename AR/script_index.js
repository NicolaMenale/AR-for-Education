var lastMarker = null;
window.addEventListener('message', handleMessage);
function handleMessage(event) {
    var newMarkerId = event.data;

    // Hide the text of the previous marker if it exists
    if (lastMarker !== null) {
        var elementToHide = document.getElementById(lastMarker);
        if (elementToHide) {
            elementToHide.style.display = "none";
        }
    }

    // Example: Show the text of the new marker
    var elementToShow = document.getElementById(newMarkerId);
    if (elementToShow) {
        elementToShow.style.display = "block";
    }

    // Update the ID of the last marker
    lastMarker = newMarkerId;
}