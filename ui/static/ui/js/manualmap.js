mapboxgl.accessToken = 'pk.eyJ1IjoiZHRhdGFydSIsImEiOiJjbGk2MHR3b2QzNng1M2Ntd2p3NDZ5dm83In0.vdDcxDfcebYvq54vva5OtQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/dtataru/cli61f7c200p501qu0skf8y66', // style URL
center: [6.565270, 46.518951], // starting position [lng, lat]
zoom: 18, // starting zoom
});
map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
    "/static/ui/css/images/brokkoly_icon.png",
    (error, image) => {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage('brokkoly', image);

        // Add a data source containing one point feature.
        map.addSource('point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [6.565270, 46.518951]
                        }
                    }
                ]
            }
        });

        // Add a layer to use the image to represent the data.
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point', // reference the data source
            'layout': {
                'icon-image': 'brokkoly', // reference the image
                'icon-size': 0.04
            }
        });
    }
);
});