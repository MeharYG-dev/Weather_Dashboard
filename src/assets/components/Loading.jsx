import Spinner from "react-bootstrap/Spinner";

import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <Spinner animation="border" />
      </div>

      <p>Fetching weather information...</p>
    </div>
  );
}

export default Loading;