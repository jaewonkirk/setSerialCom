import { Server } from "socket.io";
import { app } from "./app.js";
import { PORT } from  "../../params.js";

const server = app.listen(PORT, app.handleListening);

const io = new Server(server);

const sockets = [];
io.on("connection", (socket) => {
    console.log(`New socket is connected (ID: ${socket.id})`);
    sockets.push(socket);
})

setInterval(() => {
    sockets.forEach((socket) => {
        socket.emit("regularTimeStamp", {timestamp: Date.now()})
    })
}, 1000)