import "dotenv/config";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

app.get("/", (req, res) => {
  res.json({
    message: "Backend running",
  });
});

setInterval(async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-37.8136&longitude=144.9631&current=weather_code",
    );

    const data = await response.json();
    console.log("weather", data);
    const weatherCode = data.current.weather_code;
    io.emit("weather-alert", {
      city: "Melbourne",
      code: weatherCode,
    });
    console.log("weather checked");
  } catch (error) {
    console.error(error);
  }
}, 10000);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server running on port 3001 ${PORT}`);
});
