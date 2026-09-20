import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./RecentSearches.css";

function RecentSearches({ searches, onSearch, onClear }) {
  if (searches.length === 0) {
    return null;
  }

  return (
    <Card className="recent-searches-card">
      <Card.Body>
        <div className="recent-searches-header">
          <div className="recent-title">
            <i className="bi bi-clock-history"></i>

            <h5>Recent Searches</h5>
          </div>

          <Button
            variant="outline-danger"
            size="sm"
            className="clear-button"
            onClick={onClear}
          >
            <i className="bi bi-trash3"></i>
            Clear All
          </Button>
        </div>

        <div className="recent-cities">
          {searches.map((city) => (
            <Button
              key={city}
              variant="light"
              className="city-button"
              onClick={() => onSearch(city)}
            >
              <i className="bi bi-geo-alt-fill"></i>

              {city}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default RecentSearches;