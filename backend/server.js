import app from "./app.js";
import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["https://agency-blog-assignment.vercel.app",
      "http://localhost:5173",
      process.env.FRONTEND_LINK],
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("user connected");
    socket.on("message_from_client", (data) => {
        socket.broadcast.emit("message_from_server", data);
    });
});



server.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
