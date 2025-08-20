// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Server is running");
// });

// server.listen(3000, () => {
//   console.log(`Server is running`);
// });
// Import OS module
// const os = require("os");

// Get CPU info
// const cpus = os.cpus();

// console.log("Processor Information:\n");

// cpus.forEach((cpu, index) => {
//   console.log(`Core ${index + 1}:`);
//   console.log(` Model : ${cpu.model}`);
//   console.log(` Speed : ${cpu.speed} MHz`);
//   console.log("-----------------------------");
// });
// console.log(`Total Cores: ${cpus.length}`);

const { exec } = require("child_process");

exec(`powershell -Command "setx VARIABLE_NAME 'Ahir saunak' /M"`);
