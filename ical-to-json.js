const express = require("express");
const axios = require("axios");
const ical = require("node-ical");

const app = express();
const port = 3000;

const AIRBNB_ICAL_URL = "https://www.airbnb.com/calendar/ical/1276332360111524684.ics?s=777c57a936e0d3eaf4e96d0c96c018f6";

app.get("/blocked-dates", async (req, res) => {
  try {
    const data = await ical.async.fromURL(AIRBNB_ICAL_URL);
    const ranges = [];

    for (let k in data) {
      const ev = data[k];
      if (ev.type === "VEVENT") {
        const start = new Date(ev.start).toISOString().slice(0, 10);
        const end = new Date(ev.end).toISOString().slice(0, 10);
        ranges.push({ from: start, to: end });
      }
    }

    res.json(ranges);
  } catch (err) {
    res.status(500).json({ error: "Failed to load iCal feed", details: err.toString() });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
