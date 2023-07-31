// Assuming you have obtained your API key from the weather API provider
const apiKey = 'YOUR_API_KEY';
const weatherAPIUrl = 'https://api.weatherapi.com/v1/current.json';

// Function to fetch weather data from the API
async function fetchWeatherData(latitude, longitude) {
    try {
        const response = await fetch(`${weatherAPIUrl}?key=${apiKey}&q=${latitude},${longitude}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to initialize the map
function initMap() {
    // Initialize the map (you need to use a valid API key for Google Maps)
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 56.1304, lng: -106.3468 }, // Default center for Canada
        zoom: 4 // Adjust the zoom level as needed
    });

    // Add markers to the map with weather information
    // You'll need to fetch latitude and longitude for specific cities/locations
    const cities = [
        { name: 'Toronto', lat: 43.651070, lng: -79.347015 },
        { name: 'Vancouver', lat: 49.2827, lng: -123.1207 },
        // Add more cities as needed...
    ];

    cities.forEach(city => {
        const marker = new google.maps.Marker({
            position: { lat: city.lat, lng: city.lng },
            map: map,
            title: city.name
        });

        fetchWeatherData(city.lat, city.lng)
            .then(data => {
                if (data) {
                    // Display weather information in the marker's info window
                    const infoWindow = new google.maps.InfoWindow({
                        content: `<strong>${city.name}</strong><br>Temperature: ${data.current.temp_c}°C<br>Condition: ${data.current.condition.text}`
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
                    });
                }
            });
    });
}
