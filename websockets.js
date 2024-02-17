// client-initiated events handler
function handleClientEvents(socket) {
  socket.on("textChange", (newContent) => {
    socket.broadcast.emit("textUpdate", newContent);
  });
}

// server-initiated events handler
function handleServerEvents(socket) {
  socket.emit("serverToClient", "testing event from server");
}

export const websocketEvents = (io) => {
  io.on("connection", (socket) => {
    console.log("successful user connection");

    handleClientEvents(socket);
    handleServerEvents(socket);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
