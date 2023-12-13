var fs = require("fs");

// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:

fs.rename('myNewFile.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
