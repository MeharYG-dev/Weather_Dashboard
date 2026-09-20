import Alert from "react-bootstrap/Alert";

import "./ErrorMessage.css";

function ErrorMessage({ message, onClose }) {
  return (
    <Alert
      variant="danger"
      dismissible
      onClose={onClose}
      className="weather-error"
    >
      <i className="bi bi-exclamation-triangle-fill"></i>

      <span>{message}</span>
    </Alert>
  );
}

export default ErrorMessage;