"use strict"
const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config")
require("./db/db")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/images", express.static("images"));

app.use("/api/svg-store", require('./routers/svg-router'));
app.listen(PORT, () => {
    console.log(`Server is runing on PORT ${PORT}`)
})