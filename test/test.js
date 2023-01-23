import { autoDetect } from "@serialport/bindings-cpp";

const binding = autoDetect();

const getList = new Promise((resolve, reject) => {
    const portList = binding.list();
    resolve(portList)
})
.then((portList) => {console.log(portList)})

const setPort = new Promise((resolve, reject) => {
    const port = binding.open({path: "COM5", baudRate: 19200});
    resolve(port)
})
.then((port) => {
    console.log(port.isOpen);
    port.write(Buffer("hi"));
})