const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const path = require("path");

// This will be our application entry. We'll setup our server here.
const http = require("http");
// Set up the express app
const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Log requests to the console.
app.use(logger("dev"));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get("*", (req, res) =>
//   res.status(200).send({
//     message: "Welcome to the beginning of nothingness."
//   })
// );
const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
app.use("/", require("./routes/index"));
app.use("/tasks", require("./routes/tasks"));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
console.log(
  `Welcome to node app.js port: ${port}. Test on post man GET METHOD localhost:8000`
);

module.exports = app;
