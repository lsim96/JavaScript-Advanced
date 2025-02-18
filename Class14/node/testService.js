//require module to work with file system
const fs = require("fs");

//file path
const filePath = "./test.txt";

module.exports = {
  addText: function (text) {
    fs.writeFile(filePath, text, function (error) {
      if (error) {
        console.log(error);
        return;
      }
      console.log("The file is saved");
    });
  },
  appendText: function (text) {
    fs.appendFile(filePath, text, function (error) {
      if (error) {
        console.log(error);
        return;
      }
      console.log("The text was added to the file");
    });
  },
  readText: function () {
    return fs.readFileSync(filePath, { encoding: "utf-8" });
  },
};
