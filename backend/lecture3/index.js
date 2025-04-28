import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

let userInfo = {
  email: null,
  password: null,
};

app.use(bodyParser.urlencoded({ extended: true }));

function saveToDb(req, res, next) {
  if (req.body) {
    userInfo.email = req.body.email;
    userInfo.password = req.body.password;
  }
  next();
}

app.use(saveToDb);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  res.send(`
    <h1>
      Your email: ${userInfo.email}<br>
      Your password: ${userInfo.password}
    </h1>`);
});
// app.get("/", (req, res) => {
//   res.sendStatus(201);
// });

// app.post("/about", (req, res) => {
//   console.log(req.body);
//   res.send("<h1>hi</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>hi</h1>");
// });

// // this => /pageName called route handling
// app.get("/login", (req, res) => {
//   res.send(
//     "<h1>Login Form</h1>\
//     <form>\
// <label>email: </label class='label-input'><input class='form-control' type='email' placeholder='email'><br> \
// <label>Password: </label><input class='form-control' type='password' placeholder='password'> \
//     </form>"
//   );
// });

app.listen(port, () => {
  console.log("server");
});
