const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://overlord:Edb22edb22@cluster0.e2awg.mongodb.net/Intocode")
  .then(() => console.log("Подключение к MongoDB успешно"))
  .catch(() => console.log("Не удалось подключиться"));

app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Сервер запушен");
});
