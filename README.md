# leaflet-challenge
This project visualizes earthquake data using Leaflet and D3.js. The data is fetched from the USGS GeoJSON Feed, and earthquake events are plotted on an interactive map. The map is customized to display earthquakes based on their magnitude and depth, with popups providing additional information.

Table of Contents
Description
Features
Technologies Used
Setup Instructions
Usage
Customization
License
Description
This project aims to visualize global earthquake data from the USGS in real-time. It uses Leaflet.js to plot earthquake data based on geographic coordinates (latitude and longitude). The data markers reflect the earthquake's:

Magnitude: The size of each marker increases with the magnitude of the earthquake.
Depth: The color of each marker becomes darker as the depth increases.
Popups for each earthquake marker display more details about the event, such as its location, magnitude, and depth. Additionally, a legend provides color context for the earthquake depth.

Features
Real-time earthquake data: Fetches the most recent earthquake data from the USGS GeoJSON feed.
Interactive map: Powered by Leaflet, with zoom and pan capabilities.
Dynamic markers: The size and color of each marker are determined by earthquake magnitude and depth.
Popups: Markers include interactive popups that show additional earthquake information.
Legend: Provides users with a color-coded guide to earthquake depth.
Technologies Used
Leaflet.js: For displaying and interacting with the map.
D3.js: For fetching and processing earthquake data from the USGS API.
HTML/CSS/JavaScript: Core technologies for building the interface and map interactions.
USGS GeoJSON Feed: Provides real-time earthquake data.
Setup Instructions
1. Get the Earthquake Dataset
Visit the USGS GeoJSON Feed page and select the dataset you want to visualize. The recommended dataset is "All Earthquakes from the Past 7 Days." Once you select a dataset, you will be provided with a GeoJSON URL.

2. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/earthquake-visualization.git
cd earthquake-visualization
3. Directory Structure
Ensure your project has the following structure:

bash
Copy code
.
├── index.html
├── static
│   ├── css
│   │   └── style.css
│   └── js
│       └── logic.js
4. HTML File (index.html)
Your index.html file should include the Leaflet CSS, Leaflet JavaScript, D3.js, and your custom CSS and JavaScript files.

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Earthquake Visualization</title>
  
  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  
  <!-- Custom CSS -->
  <link rel="stylesheet" type="text/css" href="static/css/style.css">
</head>
<body>
  <div id="map"></div>
  
  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  
  <!-- D3.js -->
  <script src="https://d3js.org/d3.v7.min.js"></script>
  
  <!-- Custom JS -->
  <script src="static/js/logic.js"></script>
</body>
</html>
5. Fetch Earthquake Data
In the logic.js file, you will use D3 to fetch the earthquake data from the GeoJSON URL. The data will then be used to plot markers on the map using Leaflet.

javascript
Copy code
var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(earthquakeUrl).then(function(data) {
  // Process the data and add it to the map
});
6. Customize Markers
Markers on the map are sized based on the magnitude of the earthquake, and their color reflects the depth. This customization is done using functions like:

javascript
Copy code
function markerSize(magnitude) {
  return magnitude * 4;  // Scale marker size
}

function markerColor(depth) {
  return depth > 90 ? '#d73027' :
         depth > 70 ? '#fc8d59' :
         depth > 50 ? '#fee08b' :
         depth > 30 ? '#d9ef8b' :
         depth > 10 ? '#91cf60' :
                      '#1a9850';
}
7. Run the Project
Open index.html in a web browser, and the map will display earthquake data, with markers based on their magnitude and depth.

Usage
Once the map loads in your browser:

Zoom and Pan: Use the controls to zoom and explore different regions.
Marker Size: The larger the marker, the higher the magnitude of the earthquake.
Marker Color: The darker the marker, the deeper the earthquake.
Popups: Click on a marker to see detailed information about the earthquake, including its location, magnitude, and depth.
Customization
Change the Map's Focus
To change the default view of the map, you can modify the setView method in logic.js:

javascript
Copy code
var map = L.map('map').setView([37.8, -96], 4);  // Focuses on the United States
You can adjust the coordinates and zoom level as per your preference.

Adjust Marker Properties
To change the size or color of markers, modify the markerSize and markerColor functions.

License
This project is licensed under the MIT License.