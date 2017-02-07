"use strict";
var fs = require("fs");
function importGraph(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                return reject(err);
            }
            return resolve(data.split(', '));
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = importGraph;
