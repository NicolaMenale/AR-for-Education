// Select all 'a-marker' elements on the page
var markers = document.querySelectorAll("a-marker");

// Variable to track whether the marker is currently visible
let isMarkerVisible;

// Iterate over each 'a-marker' element
markers.forEach(function(marker) {
    // Add an event listener for the "markerFound" event
    marker.addEventListener("markerFound", function (event) {
        // Log that the marker is found along with its ID
        console.log("Marker found: " + marker.id);

        // Set the marker visibility flag to true
        isMarkerVisible = true;

        // Post a message to the parent window with the marker ID
        window.parent.postMessage(marker.id, '*');
    });
});