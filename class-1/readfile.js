const fs = require("fs");

// aSynchronous read

// fs.readFile("hello.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// Synchronous read
// try {
//     const data = fs.readFileSync('hello.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }

// Using promises

function read_aloud(data) {
  console.log(data.slice(0, 10));
}

function read_file() {
    console.log("inside read_file");
  return new Promise(function (resolve) {
    console.log("inside read_file > promise");

    fs.readFile("hello.txt", "utf-8", function (err, data) {
        console.log("inside read_file > promise > fs.readFile");
      
        resolve("Promise data : " + data);
    });
  });
}

let p = read_file();
console.log(p);
p.then(read_aloud);
console.log(p);