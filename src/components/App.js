import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import getForecast from "../requests/getForecast";

import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: ""});
  const [selectedDate, setSelectedDate] = useState(0);
  
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  };

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onforecastSelect={handleForecastSelect}
        />
    </div>
    );
  };

export default App;