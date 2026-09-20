import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WeatherCard.css";

function WeatherCard({ weather }) {

  // Prevent error if weather data is not available
  if (!weather) {
    return null;
  }

  const weatherIcon = weather.weather[0].icon;

  return (
    <Card className="weather-card">
      <Card.Body className="p-4 p-md-5">

        <div className="weather-main-section">

          {/* City */}
          <div className="weather-city">
            <i className="bi bi-geo-alt-fill"></i>

            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
          </div>

          <Row className="align-items-center g-4">

            {/* Temperature */}
            <Col md={6}>
              <div className="temperature-section">

                <img
                  src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
                  alt={weather.weather[0].description}
                  className="weather-icon"
                />

                <div>
                  <h1 className="temperature">
                    {Math.round(weather.main.temp)}°C
                  </h1>

                  <p className="weather-description text-capitalize">
                    {weather.weather[0].description}
                  </p>
                </div>

              </div>
            </Col>

            {/* Weather Details */}
            <Col md={6}>
              <div className="weather-details">

                {/* Humidity */}
                <div className="weather-detail-item">
                  <i className="bi bi-droplet-fill"></i>

                  <div>
                    <span>Humidity</span>

                    <strong>
                      {weather.main.humidity}%
                    </strong>
                  </div>
                </div>

                {/* Wind */}
                <div className="weather-detail-item">
                  <i className="bi bi-wind"></i>

                  <div>
                    <span>Wind Speed</span>

                    <strong>
                      {weather.wind.speed} m/s
                    </strong>
                  </div>
                </div>

                {/* Feels Like */}
                <div className="weather-detail-item">
                  <i className="bi bi-thermometer-half"></i>

                  <div>
                    <span>Feels Like</span>

                    <strong>
                      {Math.round(
                        weather.main.feels_like
                      )}°C
                    </strong>
                  </div>
                </div>

              </div>
            </Col>

          </Row>

        </div>

      </Card.Body>
    </Card>
  );
}

export default WeatherCard;