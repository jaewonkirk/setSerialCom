import { io } from "socket.io-client";

const socket = io("/");

const socketIOStatus = document.querySelector("#socketio-status");
const socketIOId = document.querySelector("#socketio-id-status");
let latency = -1;
setInterval(() => {
    if(socket.connected){
        socketIOStatus.innerHTML = (latency > 50)? "🟡" : "🟢";
        try{socketIOId.innerHTML = `${socket.id}`}catch{};
    } else {
        socketIOStatus.innerHTML = "🔴";
    }
}, 1000);

const latencyStatus = document.querySelector("#latency-status");
socket.on("regularTimeStamp", (data) => {
    latency = Date.now() - data.timestamp;
    latencyStatus.innerHTML = `${latency} ms`;
});

