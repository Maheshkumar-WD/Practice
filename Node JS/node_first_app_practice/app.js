const express = require("express");
const path = require("path");
const adminRoute = require("./Routes/admin");
const usersRoute = require("./Routes/users");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/admin", adminRoute);
app.use("/api", usersRoute);

// const server = http.createServer(app);
// server.listen(3002);

app.listen(8080);
