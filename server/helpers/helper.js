const fs = require("fs");

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
}

function readJSONFile(filename) {
  return JSON.parse(fs.readFileSync(filename, "utf8"));
}

module.exports = {
  writeJSONFile,
  readJSONFile
};
