/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./data");

const { items, orders, users } = mockData;
const data = JSON.stringify({ items, orders, users });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("DB created.");
});
