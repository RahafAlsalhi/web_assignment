import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   const name = req.body.name;
//   res.render("index.ejs", { name: name });
// });

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDate();
  const type = "weekday";
  const adv = "go to work";
  const data = {
    title: "ejs",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "juice"],
    htmlcontent: "lalslkkdjdfdjmfjnf",
  };
  if (day === 5 || day === 6) {
    type = "weekend";
    adv = "go to rest";
  }
  res.render("index.ejs", {
    title: "ejs",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "juice"],
    htmlcontent: "lalslkkdjdfdjmfjnf",
  });
});
app.listen(port, () => {});
