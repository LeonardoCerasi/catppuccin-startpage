class WeatherForecastClient {
  constructor(location) {
    this.appId = "b4503dca1d317b812ad429971bca987f";
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(location)}&units=metric&appid=${
      this.appId
    }`;
  }

  async getWeather() {
    return await fetch(this.url)
      .then((res) => res.json())
      .then((json) => JSON.stringify(json))
      .then((json) => JSON.parse(json))
      .then((data) => {
        const temperature = Math.round(data.main.temp);
        const condition = data.weather[0].main.toLowerCase();

        return {
          temperature,
          condition,
        };
      })
      .catch((err) => console.warn("Weather API returned an error:", err));
  }
}
