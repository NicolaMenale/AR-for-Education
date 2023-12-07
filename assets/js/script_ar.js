var markers = document.querySelectorAll("a-marker");
markers.forEach(function(marker) {
    marker.addEventListener("markerFound", function (event) {
        console.log("Marker found: " + marker.id);
        window.parent.postMessage(marker.id, '*');
    });

    marker.addEventListener("markerLost", function (event) {
        console.log("Marker lost: " + marker.id);
        window.parent.postMessage(marker.id, '*');
    });
});
