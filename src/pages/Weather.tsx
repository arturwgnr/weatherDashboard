import { useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: { description: string }[];
}



export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchWeather(e) {

  e.preventDefault();

const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

setError(null);
setLoading(true);
  try{ 
    setLoading(true);

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=b6907d289e10d714a6e88b30761fae22&units=metric`
)
const res = await data.json();

if(res) {
  setLoading(false);
  setWeather(res);
  console.log(res)
} else {
  setLoading(false);
  setError('Error trying to get weather information.')
}

  } catch(err) {
    console.error(`Error message: ${err}`)
  }
}

  return (
    <div className="weather-container">
      <h1 className="title">Weather Dashboard Lite</h1>

      <form className="form">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button onClick={fetchWeather} type="submit" className="btn">
          Search
        </button>
      </form>

      <div className="result">
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        <div className="weather-card">
          <h2>🌍 City: London</h2>
          <p>🌡 Temp: 22°C</p>
          <p>🌤 Clear sky</p>
        </div>
      </div>
    </div>
  );
}
