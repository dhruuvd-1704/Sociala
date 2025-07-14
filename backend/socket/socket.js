import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}; // this map stores socket id corresponding to the userID --> socketId

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
    console.log(
      "user connected successfully: User ID:",
      userId,
      "Socket ID:",
      socket.id
    );
  }
  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //this is a event that will be listned in the frontend to get the online users
  socket.on("disconnect", () => {
    if (userId) {
      console.log(
        `User connected: UserId = ${userId}, SocketId = ${socket.id}`
      );
      delete userSocketMap[userId];
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io };
