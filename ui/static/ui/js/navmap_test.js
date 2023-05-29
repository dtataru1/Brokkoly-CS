// Token from @dtataru1's account
mapboxgl.accessToken = 'pk.eyJ1IjoiZHRhdGFydSIsImEiOiJjbGk2MHR3b2QzNng1M2Ntd2p3NDZ5dm83In0.vdDcxDfcebYvq54vva5OtQ';

var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/dtataru/cli61f7c200p501qu0skf8y66', // style URL
    center: [6.565270, 46.518951], // starting position [lng, lat]
    zoom: 18, // starting zoom
});

function handleWaypoint(waypoint) {
    // Add the waypoint to your flight plan or send it to your drone system

    // Create a pop-up button at the clicked location
    var button = document.createElement('button');
    button.innerHTML = 'Add Waypoint';
    button.onclick = function() {
        addWaypointToFlightPlan(waypoint);
    };

    // Create a container for the pop-up content
    var container = document.createElement('div');
    container.appendChild(button);

    // Create a pop-up and attach the container to it
    var popup = new mapboxgl.Popup()
        .setLngLat(waypoint)
        .setDOMContent(container)
        .addTo(map);

    // Adjust the pop-up position relative to the cursor
    var markerHeight = 25;
    var offset = {
        x: 0,
        y: -markerHeight
    };
    popup.setOffset(offset);
}

function addWaypointToFlightPlan(waypoint) {
    // This function will be triggered when the "Add Waypoint" button is clicked in the pop-up.
    // You can perform any necessary actions to add the waypoint to your flight plan here.
    console.log('Waypoint added to flight plan:', waypoint);
}

map.on('click', function(e) {
    var coordinates = e.lngLat; // Get the clicked coordinates
    var waypoint = {
        longitude: coordinates.lng,
        latitude: coordinates.lat
    };

    // Call a function to handle the waypoint and display a pop-up button
    handleWaypoint(coordinates);
});
