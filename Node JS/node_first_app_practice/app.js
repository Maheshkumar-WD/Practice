const express = require("express");
const file = require("fs");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
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
app.get("/", (req, res) => {
  let fileData = file.readFileSync("db.json", { encoding: "utf-8" });
  let parsedData = JSON.parse(fileData);
  res.send(parsedData);
});

app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let fileData = file.readFileSync("db.json", { encoding: "utf-8" });
  let parsedData = JSON.parse(fileData).data;

  let findUser = parsedData.findIndex((user) => user.id == id);
  if(findUser>-1){
    res.send(parsedData[findUser]);
  }else{
    res.send({message:"user not found",status:500})
  }
  console.log(findUser);
});
app.post("/post", (req, res) => {
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
// const server = http.createServer(app);
// server.listen(3002);

app.listen(8080);
