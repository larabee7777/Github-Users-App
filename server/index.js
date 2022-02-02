const express = require("express");

const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
