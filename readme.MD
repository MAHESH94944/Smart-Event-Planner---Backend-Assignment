# Smart Event Planner - Backend

## Problem Statement

Build a backend service that helps users plan outdoor events by integrating multiple APIs to provide intelligent recommendations. The system should consider weather forecasts, venue availability, traffic conditions, and user preferences to suggest optimal event timing and locations.

**Hosted API:**  
[https://smart-event-planner-backend-assignment.onrender.com/events](https://smart-event-planner-backend-assignment.onrender.com/events)

**Postman Collection:**  
[Smart Event Planner API (Postman)](https://gist.github.com/MAHESH94944/7f3aba88d816d02269763bc76590f8a8)

A backend service to help users plan outdoor events by integrating weather forecasts and providing intelligent recommendations for event timing and location.

## Features

- **Weather API Integration:** Uses OpenWeatherMap for current weather and 5-day forecasts.
- **Event Management:** Create, update, and list events with location, date, and type.
- **Weather Analysis:** Fetches weather for event location and date, calculates suitability score (Good/Okay/Poor).
- **Recommendations:** Suggests alternative dates with better weather within the same week.
- **Error Handling:** Handles API errors, invalid locations, and missing data gracefully.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Weather API:** OpenWeatherMap
- **Dev Tools:** Nodemon, dotenv

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**

   Create a `.env` file in the `server` directory:

   ```
   MONGO_URI=your_mongodb_connection_string
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```
   The server runs on `http://localhost:5000`.

## API Endpoints

### Event Management

- **POST /events**

  - Create a new event.
  - Body: `{ "name": "...", "location": "...", "date": "YYYY-MM-DD", "eventType": "cricket|wedding|hiking|..." }`

- **GET /events**

  - List all events.

- **PUT /events/:id**
  - Update event details.
  - Body: Any of the event fields.

### Weather Integration

- **GET /weather/:location/:date**

  - Get weather for a specific location and date.

- **POST /events/:id/weather-check**

  - Analyze weather for an existing event.

- **GET /events/:id/alternatives**
  - Suggest better weather dates within ±2 days of the event.

### Simple Analytics

- **GET /events/:id/suitability**
  - Get weather suitability score for the event.

## Weather Scoring Algorithm

- **Outdoor Sports:**

  - Temperature 15-30°C: +30 points
  - Precipitation <20%: +25 points
  - Wind <20km/h: +20 points
  - Clear/Partly cloudy: +25 points

- **Wedding/Formal Events:**
  - Temperature 18-28°C: +30 points
  - Precipitation <10%: +30 points
  - Wind <15km/h: +25 points
  - Aesthetic weather: +15 points

## Error Handling

- Invalid location or date returns a clear error message.
- Handles weather API downtime and rate limits gracefully.

## Example Usage (Postman)

- Create events (e.g., Cricket Tournament, Wedding, Hiking Trip)
- List all events
- Update event details
- Get weather for a location and date
- Check weather suitability for an event
- Get alternative dates for better weather

## Notes

- Make sure to use valid MongoDB ObjectIds for event endpoints.
- The weather API key is required for all weather-related endpoints.

---

**Author:**  
Smart Event Planner Backend Assignment
