const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require('cors')
const { auth_router } = require("./Routes/auth.Routes");
const { notes_router } = require("./Routes/notes.Routes");
dotenv.config({ path: "config/config.env" });
const { PORT } = process.env;
const { connect } = require("./database/database.js");

//routes
// process.on("uncaughtException", (err) => {
//   console.info(`An error has occured ${err.message}`);
//   server.close(() => {
//     process.exit(1);
//   });
// })
app.use(express.json());
app.use("/api/v1",cors(), auth_router);
app.use("/api/v1",cors(), notes_router);
connect();
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
process.on("unhandledRejection", (err) => {
  console.log(`An error has occured ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
