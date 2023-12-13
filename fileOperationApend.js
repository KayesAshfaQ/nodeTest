var fs = require("fs");

// The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile("myNewFile.txt", "some data for the file xxxx", function (err) {
  if (err) throw err;
  console.log("saved");
});
