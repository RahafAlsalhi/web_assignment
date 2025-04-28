// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// function check(req, res, next) {
//   const SECRET = "programming";
//   const { password } = req.body;

//   if (password === SECRET) {
//     res.sendFile(__dirname + "/public/secret.html");
//   } else {
//     res.sendFile(__dirname + "/public/index.html");
//   }
// }

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/check", check);

// app.listen(port, () => {
//   console.log("server");
// });
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const password = "programming";
let isAuth = false;
app.use(bodyParser.urlencoded({ extended: true }));

function lock(req, res, next) {
  isAuth = false; //reset
  if (req.body && req.body.password === password) {
    isAuth = true;
  }
  next();
}
app.use(lock);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAuth) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log("server");
});
