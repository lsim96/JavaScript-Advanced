const fs = require("fs");

const fileName = "jsonDatase.txt";

const service = {
  addData: function (data) {
    let strData = JSON.stringify(data);
    fs.writeFile(fileName, strData, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The data is saved");
    });
  },
  appendData: function (data) {
    let readData = this.readData();
    let newData = { ...readData, ...data };
    let strData = JSON.stringify(newData);
    fs.writeFile(fileName, strData, function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("The data is fully appended to the file ");
    });
  },
  readData: function () {
    let strData = fs.readFileSync(fileName, { encoding: "utf-8" });
    return JSON.parse(strData);
  },
};

module.exports = service;
