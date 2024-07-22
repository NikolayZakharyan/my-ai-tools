import { spawn } from "child_process";

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Please provide a migration name.");
  process.exit(1);
}

const migrationName = args.join("_");

const drizzleProcess = spawn("drizzle-kit", [
  "generate",
  "--name",
  migrationName,
]);

drizzleProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

drizzleProcess.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

drizzleProcess.on("error", (error) => {
  console.error(`Error generating migration: ${error.message}`);
});

drizzleProcess.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});
