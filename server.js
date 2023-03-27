"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const { notFound } = require("./errorHandlers/404");
const userRoutes = require("./routes/users.route");
const dealRoutes = require("./routes/deals.route");
const claimedRoutes = require("./routes/claimed.route");
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(dealRoutes);
app.use(claimedRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

app.use("*", notFound);

function start(port) {
    app.listen(port, () => {
        console.log(`Server is on port: ${port}`);
    });
}

module.exports = {
    app,
    start
};
