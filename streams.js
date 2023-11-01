const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunks) => {
//   console.log("-----NEW CHUNK-----");
//   console.log(chunks);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunks);
// });

// piping - doing the same exact thing above

readStream.pipe(writeStream);
