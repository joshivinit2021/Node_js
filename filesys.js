// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('mynewfile1.txt is created  using append file');
// });

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('mynewfile2.txt is created  using fs.open');
// });

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('mynewfile3.txt is created  using fs.writeFile');
// });

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' method appends the specified content at the end of the specified file', function (err) {
//   if (err) throw err;
//   console.log('using fs.appendFile');
// });

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is fs.writeFile() method replaces the specified file and content', function (err) {
//   if (err) throw err;
//   console.log('Replaced with fs.writeFile()!');
// });

// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// to fs.readFile
const fs = require('fs');

fs.readFile('myrenamedfile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

