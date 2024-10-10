// initlizing the map and set the view
var map = L.map('map').setView([37.8, -96], 4);

// add a tile layer (basemap) from the openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// URL for the earthquake data 
var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// function to set marker size based on magnitude
function markerSize(magnitude) {
    return magnitude * 4;
}

// function to set marker color based on depth
function markerColor(depth) {
 return depth > 90 ? '#d73027' :
        depth > 70 ? '#fc8d59' :
        depth > 50 ? '#fee08b' :
        depth > 30 ? '#d9ef8b' :
        depth > 10 ? '#91cf60' :
                     '#1a9850';
}

// load the data using D3
d3.json(earthquakeUrl).then(function(data) {

    // add the data the the map as GeoJSON, 
    // creating a marker for each earthquake
    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize(feature.properties.mag),
                fillColor: markerColor(feature.geometry.coordinates[2]),
                color: '#000',
                weight: 1,
                fillOpacity: 0.8
            });
        },
        onEachFeature: function(feature, layer) {
            // add popups with earthquake information
            layer.bindPopup(`<h3>${feature.properties.place}</h3>
                       <hr><p>Magnitude: ${feature.properties.mag}</p>
                       <p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
        }
    }).addTo(map);

    // create and add a legend to explain the depth colors
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'legend'),
            depthLevels = [-10, 10, 30, 50, 70, 90],
            colors = ['#1a9850', '#91cf60', '#d9ef8b', '#fee08b', '#fc8d59', '#d73027'];

        div.innerHTML = '<h4>Earthquake Depth (km)</h4>';

        // loop through the depth levels and create the color legend
        for (var i = 0; i < depthLevels.length; i++) {
            div.innerHTML +=
                '<i style=background:' + colors[i] + '"></i> ' +
                depthLevels[i] + (depthLevels[i + 1] ? '&ndash;' + depthLevels[i+1] + '<br>' : '+');               
        }
        
        return div;
    };

    legend.addTo(map);
});