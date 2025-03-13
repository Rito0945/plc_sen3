const { createServer } = require("http");
const { spawn } = require("child_process");

createServer((req, res) => {
  const php = spawn("php", ["-S", "localhost:8000", "-t", "api"]);

  php.stdout.on("data", (data) => {
    res.write(data);
  });

  php.stderr.on("data", (data) => {
    res.write(data);
  });

  php.on("close", () => {
    res.end();
  });
}).listen(3000, () => console.log("Server running on port 3000"));
