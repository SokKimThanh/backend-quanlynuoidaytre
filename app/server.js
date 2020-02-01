// Set up the express app
var app_module = require("./app");
var task_module = require("./task/task.routes"); //importing route
task_module(app_module); //register the route
