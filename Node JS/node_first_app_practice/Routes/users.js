const path = require("path");
const express = require("express");
const file = require("fs");
const route = express.Router();

route.get("/", (req, res) => {
    let fileData = file.readFileSync("db.json", { encoding: "utf-8" });
    let parsedData = JSON.parse(fileData);
    res.sendFile( path.join(__dirname,"../","views","user.html"),);
    // res.send(parsedData);
  })

route.get("/users/:id", (req, res) => {
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
})
module.exports = route