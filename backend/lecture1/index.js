import fs from "fs";

fs.writeFile("m.txt", "hello", (err) => {
  if (err) throw err;
  console.log("the file saved");

  // Only read after writing is done
  fs.readFile("m.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
