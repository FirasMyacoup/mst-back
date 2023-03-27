"use strict";

const server = require("./server.js");
require("dotenv").config();
const { db } = require("./models");

const PORT = process.env.PORT || 3001;

db.sync().then(() => {
 server.start(PORT);
});