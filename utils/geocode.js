const getCoordinates = async (address, apiKey) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);

    if (!response.ok) {
        console.error('Geocoding API request failed.');
        return;
    }

    const result = await response.json();

    if (result.results && result.results[0] && result.results[0].geometry && result.results[0].geometry.location) {
        return result.results[0].geometry.location;
    } else {
        console.error('No location found for this address.');
        return;
    }
};

export default getCoordinates;