import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import Header from "./assets/components/Header";
import SearchWeather from "./assets/components/SearchWeather";
import WeatherCard from "./assets/components/WeatherCard";
import Loading from "./assets/components/Loading";
import ErrorMessage from "./assets/components/ErrorMessage";
import RecentSearches from "./assets/components/RecentSearches";

import "./App.css";

function App() {
  // Stores weather API data
  const [weather, setWeather] = useState(null);

  // Controls loading spinner
  const [loading, setLoading] = useState(false);

  // Stores error message
  const [error, setError] = useState("");

  // Stores recent searched cities
  const [recentSearches, setRecentSearches] = useState([]);

  // Controls dark/light mode
  const [darkMode, setDarkMode] = useState(false);

  // Gets API key from .env file
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Load recent searches when application starts
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");

    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Save searched city
  const saveRecentSearch = (city) => {
    setRecentSearches((previousSearches) => {
      const updatedSearches = [
        city,
        ...previousSearches.filter(
          (item) =>
            item.toLowerCase() !== city.toLowerCase()
        ),
      ].slice(0, 5);

      localStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );

      return updatedSearches;
    });
  };

  // Get weather by city
  const getWeatherByCity = async (city) => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          "City not found. Please check the spelling and try again."
        );
      }

      const data = await response.json();

      setWeather(data);

      saveRecentSearch(data.name);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Get weather using current location
  const getCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );

      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) {
            throw new Error(
              "Unable to get weather information."
            );
          }

          const data = await response.json();

          setWeather(data);

          saveRecentSearch(data.name);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      },

      () => {
        setLoading(false);

        setError(
          "Unable to access your location. Please allow location permission."
        );
      }
    );
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    localStorage.removeItem("recentSearches");

    setRecentSearches([]);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Container className="py-5">
          <div className="weather-container">

            {/* Hero Section */}
            <section className="hero-section">
              <span className="hero-badge">
                <i className="bi bi-cloud-sun"></i>
                Real-Time Weather
              </span>

              <h1 className="main-title">
                Weather Dashboard
              </h1>

              <p className="main-subtitle">
                Get accurate and real-time weather information
                from anywhere in the world.
              </p>
            </section>

            {/* Search Section */}
            <SearchWeather
              onSearch={getWeatherByCity}
              onLocation={getCurrentLocationWeather}
            />

            {/* Loading */}
            {loading && <Loading />}

            {/* Error */}
            {error && (
              <ErrorMessage
                message={error}
                onClose={() => setError("")}
              />
            )}

            {/* Weather Card */}
            {weather && (
              <WeatherCard weather={weather} />
            )}

            {/* Recent Searches */}
            <RecentSearches
              searches={recentSearches}
              onSearch={getWeatherByCity}
              onClear={clearRecentSearches}
            />

          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;