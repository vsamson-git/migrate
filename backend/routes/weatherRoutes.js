const axios = require('axios');

module.exports = (app) => {
  app.get('/api/weather/:city', async (req, res) => {
    console.log('checking weather...');
    if (req.params.city) {
      try {
        const { data } = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
          params: {
            key: process.env.WEATHER_KEY,
            q: req.params.city,
            days: 1,
            aqi: "yes",
            alerts: "no"
          }
        });
        return res.json(data);
      }
      catch (err) {
        return res.status(400).send(err);
      }
    }
    return res.status(400).send("Invalid city");
  })
}