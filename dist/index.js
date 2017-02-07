"use strict";
var path = require("path");
var getTestOutput_1 = require("./getTestOutput");
var fileName = path.join(__dirname, '../data/graph.txt');
getTestOutput_1.default(fileName)
    .then(function (testOutput) { return console.log(testOutput); });
