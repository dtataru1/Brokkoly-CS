/*
Script for displaying a GPS map on the GUI
Enables to also store and create a flight path and display it on the GUI


Author: @dtataru1
Date: 28.05.2023
*/


// Global variables
// var waypointMarker; // Declare waypointMarker variable
// var removeBtn; // Declare removeBtn variable
// var waypoints = [];
// var takeoffMarker = null; // Initialize takeoff marker variable
// var landingMarker = null; // Initialize landing marker variable

// // Token from @dtataru1's account
// mapboxgl.accessToken = 'pk.eyJ1IjoiZHRhdGFydSIsImEiOiJjbGk2MHR3b2QzNng1M2Ntd2p3NDZ5dm83In0.vdDcxDfcebYvq54vva5OtQ';

// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/dtataru/cli61f7c200p501qu0skf8y66', // style URL
//     center: [6.565270, 46.518951], // starting position [lng, lat]
//     zoom: 18, // starting zoom
// });

// map.on('load', () => {
//     // Load an image from an external URL.
//     map.loadImage(
//         "/static/ui/images/brokkoly_icon.png",
//         (error, image) => {
//             if (error) throw error;

//             // Add the image to the map style.
//             map.addImage('brokkoly', image);

//             // Add a data source containing one point feature.
//             map.addSource('point', {
//                 'type': 'geojson',
//                 'data': {
//                     'type': 'FeatureCollection',
//                     'features': [
//                         {
//                             'type': 'Feature',
//                             'geometry': {
//                                 'type': 'Point',
//                                 'coordinates': [6.565270, 46.518951]
//                             }
//                         }
//                     ]
//                 }
//             });

//             // Add a layer to use the image to represent the data.
//             map.addLayer({
//                 'id': 'points',
//                 'type': 'symbol',
//                 'source': 'point', // reference the data source
//                 'layout': {
//                     'icon-image': 'brokkoly', // reference the image
//                     'icon-size': 0.04
//                 }
//             });
//         }
//     );
// });


// function addWaypoint() {
//     var longitudeInput = document.getElementById('longitude');
//     var latitudeInput = document.getElementById('latitude');

//     var longitude = parseFloat(longitudeInput.value);
//     var latitude = parseFloat(latitudeInput.value);

//     if (isNaN(longitude) || isNaN(latitude)) {
//       alert('Please enter valid longitude and latitude values.');
//       return;
//     }

//     var waypoint = {
//       longitude: longitude,
//       latitude: latitude
//     };

//     // Store any additional waypoint details as properties of the `waypoint` object

//     waypoints.push(waypoint);

//     var waypointMarker = new mapboxgl.Marker()
//       .setLngLat([longitude, latitude])
//       .addTo(map);

//     var removeBtn = document.createElement('button');
//     removeBtn.innerHTML = 'Remove Waypoint';
//     removeBtn.className = 'removeBtn';
//     removeBtn.addEventListener('click', function () {
//       removeWaypoint(waypoint, waypointMarker);
//     });

//     waypointMarker.getElement().appendChild(removeBtn);

//     // Clear the input fields
//     longitudeInput.value = '';
//     latitudeInput.value = '';
//   }

//   function removeWaypoint(waypoint, marker) {
//     var index = waypoints.indexOf(waypoint);
//     if (index > -1) {
//       waypoints.splice(index, 1);
//     }
//     marker.remove();
//   }

//   function addTakeoffPoint() {
//     if (takeoffMarker !== null) {
//       alert('Takeoff point already added.');
//       return;
//     }

//     var longitudeInput = document.getElementById('longitude');
//     var latitudeInput = document.getElementById('latitude');

//     var longitude = parseFloat(longitudeInput.value);
//     var latitude = parseFloat(latitudeInput.value);

//     if (isNaN(longitude) || isNaN(latitude)) {
//       alert('Please enter valid longitude and latitude values.');
//       return;
//     }

//     takeoffMarker = new mapboxgl.Marker({ color: 'green' })
//       .setLngLat([longitude, latitude])
//       .addTo(map);

//     // Clear the input fields
//     longitudeInput.value = '';
//     latitudeInput.value = '';
//   }

//   function addLandingPoint() {
//     if (landingMarker !== null) {
//       alert('Landing point already added.');
//       return;
//     }

//     var longitudeInput = document.getElementById('longitude');
//     var latitudeInput = document.getElementById('latitude');

//     var longitude = parseFloat(longitudeInput.value);
//     var latitude = parseFloat(latitudeInput.value);

//     if (isNaN(longitude) || isNaN(latitude)) {
//       alert('Please enter valid longitude and latitude values.');
//       return;
//     }

//     landingMarker = new mapboxgl.Marker({ color: 'red' })
//       .setLngLat([longitude, latitude])
//       .addTo(map);

//     // Clear the input fields
//     longitudeInput.value = '';
//     latitudeInput.value = '';
//   }

//   // Bind the addWaypoint function to the addWaypointBtn button
//   document.getElementById('addWaypointBtn').addEventListener('click', addWaypoint);
//   document.getElementById('addTakeoffBtn').addEventListener('click', addTakeoffPoint);
//   document.getElementById('addLandingBtn').addEventListener('click', addLandingPoint);



var waypoints = [];
var takeoffMarker = null; // Initialize takeoff marker variable
var landingMarker = null; // Initialize landing marker variable


