import express from "express";
import { PORT } from "../../params.js";

export const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/client/views");
app.use(express.static(process.cwd() + "/build"));

app.get("/", (req, res) => {res.render("home")});

app.handleListening = () => console.log(`✅Server is listening on port ${PORT}`);

