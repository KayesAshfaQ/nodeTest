var fs = require("fs");

// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:

fs.unlink("myNewFile.txt", function (err) {
  if (err) throw err;
  console.log("deleted!");
});

