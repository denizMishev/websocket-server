// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true,
//   },
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.emit("serverToClient", "event emitted from Server");
// });

// io.on("connection", (socket) => {
//   socket.on("textChange", (newContent) => {
//     // broadcast new content to other clients
//     socket.broadcast.emit("textUpdate", newContent);
//   });
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

import express from "express";
import http from "http";
import { Server } from "socket.io";
import { websocketEvents } from "./websockets.js";

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

websocketEvents(io);
