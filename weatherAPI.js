const apiKey = '72f05fb8bade4c82433ff8c4e6d2b3dc'; 

async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dhahran&appid=${apiKey}`);

        if (!response.ok) {
            throw new Error('Failed to retrieve weather data');
        }

        const data = await response.json();

        if (!data || !data.weather || data.weather.length === 0 || !data.weather[0].main) {
            throw new Error('Invalid weather data format');
        }

        return data.weather[0].main;
    } catch (error) {
        console.log('Error fetching weather data:', error);
        return null;
    }
}

export { getWeatherData };
