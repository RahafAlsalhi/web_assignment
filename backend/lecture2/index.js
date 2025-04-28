import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([{ message: "PLEASE ENTER YOUR URL", name: "URl" }])
  .then((answers) => {
    const url = answers.URl;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("the file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
