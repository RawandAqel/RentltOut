// weatherController.js
const { fetchTemperature } = require('../../weatherService');



async function getWeather(req, res) {
  const { city } = req.params;

  try {
    const temperature = await fetchTemperature(city);
    res.status(200).json({ city, temperature });
  } catch (error) {
    console.error('Error fetching temperature:', error);
    res.status(500).json({ error: 'Failed to fetch temperature data' });
  }
}

module.exports = { getWeather };
