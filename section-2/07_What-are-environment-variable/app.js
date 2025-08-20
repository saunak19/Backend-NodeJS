const envVariable = process.env;

// setInterval(() => {
//   console.log(envVariable);
// }, 1000);

const fs = require("fs");
const fileData = fs.readFileSync("./abcd").toString();
fileData.split("\n").forEach((val) => {
  const [key, value] = val.split("=");
  process.env[key] = value;
  //   console.log(key, value);
});

console.log(process.env);
