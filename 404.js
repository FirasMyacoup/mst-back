"use strict";

const notFound = (req, res, next) => {
 res.send({
  status: 404,
  message: "Page not found",
 });
};

module.exports = {
 notFound,
};