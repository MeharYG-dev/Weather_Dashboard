# 🌤️ Weather Dashboard

A modern, responsive Weather Dashboard built with **React, Vite, React Bootstrap, Bootstrap Icons, and the OpenWeather API**.

The application allows users to search for weather information by city, view weather based on their current location, access recent searches, and switch between light and dark modes.

---

## 🌐 Live Demo

🚀 **Live Website:** [Weather Dashboard](https://mehar-weather-dashboard.netlify.app/)

📂 **GitHub Repository:** [Weather Dashboard](https://github.com/MeharYG-dev/Weather_Dashboard)

---

## 📌 Project Overview

The Weather Dashboard provides real-time weather information through a clean, responsive, and user-friendly interface.

Users can:

- 🔍 Search weather by city name
- 📍 Get weather using their current location
- 🌡️ View current temperature
- 🌤️ View weather conditions and weather icons
- 💧 View humidity
- 💨 View wind speed
- 🌡️ View "Feels Like" temperature
- 🕘 Access recently searched cities
- 🗑️ Clear recent searches
- 🌙 Switch between Light Mode and Dark Mode
- ⏳ View a loading state while weather data is being fetched
- ⚠️ Receive clear error messages for invalid cities or API errors
- 📱 Use the application on desktop, tablet, and mobile devices

---

## ✨ Features

### 🔍 City Weather Search

Search for weather information by entering any valid city name.

The application displays:

- City name
- Country
- Temperature
- Weather condition
- Weather icon
- Humidity
- Wind speed
- Feels-like temperature

### 📍 Current Location Weather

Users can allow browser location access to retrieve weather information for their current location.

The application uses the browser's **Geolocation API** to obtain latitude and longitude and retrieves the corresponding weather information.

### 🕘 Recent Searches

Recently searched cities are stored using **localStorage**.

Features include:

- Save recent searches
- Display previously searched cities
- Search a city again with one click
- Prevent duplicate cities
- Keep the latest 5 searches
- Clear all recent searches

### 🌙 Dark Mode

Users can switch between:

- ☀️ Light Mode
- 🌙 Dark Mode

The interface updates dynamically without reloading the page.

### ⏳ Loading State

A loading spinner is displayed while weather information is being fetched from the API.

### ⚠️ Error Handling

The application provides user-friendly error messages for situations such as:

- Invalid city names
- City not found
- API request errors
- Location permission denied
- Geolocation unavailable
- Empty search input

### 📱 Responsive Design

The application is designed to work across:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

The layout uses **React Bootstrap** and responsive CSS to provide a consistent experience across different screen sizes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development and build tool |
| React Bootstrap | Responsive UI components |
| Bootstrap | Layout and styling |
| Bootstrap Icons | Interface icons |
| JavaScript | Application logic |
| CSS | Custom styling and responsive design |
| OpenWeather API | Weather data |
| Fetch API | API requests |
| LocalStorage | Storing recent searches |
| Geolocation API | Current location weather |
| Netlify | Deployment |
| Git & GitHub | Version control |

---

## 📂 Project Structure

```text
Weather_Dashboard/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── components/
│   │       ├── Header.jsx
│   │       ├── Header.css
│   │       ├── SearchWeather.jsx
│   │       ├── SearchWeather.css
│   │       ├── WeatherCard.jsx
│   │       ├── WeatherCard.css
│   │       ├── Loading.jsx
│   │       ├── Loading.css
│   │       ├── ErrorMessage.jsx
│   │       ├── ErrorMessage.css
│   │       ├── RecentSearches.jsx
│   │       └── RecentSearches.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
