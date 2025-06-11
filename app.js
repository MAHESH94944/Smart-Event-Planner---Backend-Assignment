const express = require("express");
const cors = require("cors");
const eventRoutes = require("./routes/events");
const weatherRoutes = require("./routes/weather");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/events", eventRoutes);
app.use("/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("Smart Event Planner API is running");
});

module.exports = app;
