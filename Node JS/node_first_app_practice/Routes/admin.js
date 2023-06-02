const express = require("express");
const file = require("fs");
const route = express.Router();
route.use((req, res, next) => {
  if (req.url === "/post") {
    if (req.body.name != "") {
      if (req.body.age >= 18) {
        return next();
      } else {
        return res.send({
          message: "age must be greater than 18",
          status: 403,
        });
      }
    } else {
      return res.send({ message: "name cannot be blank", status: 403 });
    }
  }
  next();
});

route.post("/post", (req, res) => {
  let fileData = file.readFileSync("db.json", { encoding: "utf-8" });
  let parsedData = JSON.parse(fileData);
  let response = req.body;
  response.id = parsedData.data.length + 1;
  parsedData.data.push(response);
  file.writeFileSync("db.json", JSON.stringify(parsedData), {
    encoding: "utf-8",
  });
  res.send({ status: 200, message: "success" });
});

module.exports = route;
