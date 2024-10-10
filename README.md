# Earthquake Visualization README

## Project Overview

This project visualizes earthquake data using Leaflet, a powerful JavaScript library for interactive maps. The visualization includes information about earthquake magnitude and depth, providing a comprehensive understanding of recent seismic activity.

## Part 1: Create the Earthquake Visualization

### Step 1: Get Your Dataset

1. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to access updated earthquake data every 5 minutes.
2. Choose a dataset to visualize. For example, select "All Earthquakes from the Past 7 Days." You will be presented with a JSON representation of the data.

### Step 2: Import and Visualize the Data

1. **Map Setup**:
   - Use Leaflet to create a map that displays all earthquakes from the selected dataset.
   - Plot the earthquakes based on their longitude and latitude.

2. **Data Markers**:
   - Customize markers to reflect earthquake magnitude using size:
     - Higher magnitude = larger marker size.
   - Use color to represent earthquake depth:
     - Greater depth = darker color.

3. **Popup Information**:
   - Implement popups for each marker to provide additional information about the earthquake, such as:
     - Magnitude
     - Depth
     - Location
     - Time

4. **Legend Creation**:
   - Include a legend on the map that explains the color coding for depth and size scaling for magnitude, enhancing user understanding.

### Example Visualization

Your final visualization should resemble the example provided, effectively displaying the earthquake data with clear, interactive features.

## Conclusion

This project aims to help users visually understand seismic activity by leveraging real-time data and interactive mapping techniques. Follow the steps outlined above to successfully create your earthquake visualization!
