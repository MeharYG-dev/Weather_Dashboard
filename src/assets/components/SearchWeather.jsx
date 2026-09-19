import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import "./SearchWeather.css";

function SearchWeather({ onSearch, onLocation }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(city);
  };

  return (
    <Form onSubmit={handleSubmit} className="search-weather-form">
      <InputGroup className="search-input-group">
        <InputGroup.Text>
          <i className="bi bi-search"></i>
        </InputGroup.Text>

        <Form.Control
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />

        <Button
          variant="primary"
          type="submit"
          className="search-button"
        >
          Search
        </Button>

        <Button
          variant="success"
          type="button"
          className="location-button"
          onClick={onLocation}
        >
          <i className="bi bi-geo-alt-fill"></i>
          Location
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchWeather;