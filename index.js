const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

let murrays = [
  { name: "Peter Venkman" },
  { name: "Bob Harris" },
  { name: "Phil Connors" },
  { name: "Steve Zissou" }
];
murrays = murrays.concat(murrays);
murrays = murrays.concat(murrays);
murrays = murrays.concat(murrays);

app.get("/", (req, res) => {
  res.render("index", {
    murrays: murrays
  });
});

app.listen(8080, () => {
  console.log("App is listening on http://localhost:8080");
});
