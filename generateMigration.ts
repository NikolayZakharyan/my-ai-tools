import { exec } from "child_process";

const args = process.argv.slice(2);

console.log(args);

if (args.length < 1) {
  console.error("Please provide a migration name.");
  process.exit(1);
}

const migrationName = args.join("_");

exec(
  `drizzle-kit generate --name ${migrationName}`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error generating migration: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
