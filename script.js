var marker = document.querySelector("a-marker");
marker.addEventListener("markerFound", function (event) {
    console.log("Marker found");
    window.parent.postMessage('markerFound', '*');
});

marker.addEventListener("markerLost", function (event) {
    console.log("Marker lost");
    window.parent.postMessage('markerLost', '*');
});
