let http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to Node js</h1>");
    return res.end();
  }
  if (req.url === "/products") {
    let data = fs.readFileSync("db.json", { encoding: "utf-8" });
    let parsedData = JSON.parse(data).products;
    res.write(JSON.stringify(parsedData));
    return res.end();
  }
});

let port = 8081;
let host = "localhost";

server.listen(port, host, () => {
  console.log(`server is running at PORT: ${port},Link http://${host}:${port}`);
});
