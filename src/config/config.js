"use strict"
require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 1000,
    DBURL: process.env.dbURL

}