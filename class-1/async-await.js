const fs = require("fs");

function read_aloud(data) {
  console.log(data);
}

async function read_file() {
  return new Promise(function (resolve) {
    fs.readFile("hello.txt", "utf-8", function (err, data) {
      resolve("Promise data : " + data);
    });
  });
}

// function main() {
//   let p = read_file();
//   p.then(read_aloud);
// }

// The above code
async function main() {
  let p = await read_file();
  console.log(p);
}

main();
