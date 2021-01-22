const path = require("path");

module.exports = {
  entry: ["./public/script/script.js"],
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "./src/main.js",
  },
};
