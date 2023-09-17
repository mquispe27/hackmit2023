import { Server } from "socket.io";

export const attachSocketLogic = (io: Server) => {
  io.on("connection", (socket) => {
    // Initialize the chatgpt client

    socket.on("disconnect", () => {
      console.log("SOCKET DISCONNECTED");
    });
  });
};
