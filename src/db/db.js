const mongoose = require("mongoose");
const { DBURL } = require("../config/config")
mongoose.connect(DBURL).then(() => {
    console.log("Server is connected to database 🎉😍")
}).catch((error) => {
    console.log("Server is not connect to database error message : ", error.message)
})