"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const node_http_1 = require("node:http");
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const io = new socket_io_1.Server(server, {
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
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-37.8136&longitude=144.9631&current=weather_code");
        const data = await response.json();
        console.log("weather", data);
        const weatherCode = data.current.weather_code;
        io.emit("weather-alert", {
            city: "Melbourne",
            code: weatherCode,
        });
        console.log("weather checked");
    }
    catch (error) {
        console.error(error);
    }
}, 10000);
io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
