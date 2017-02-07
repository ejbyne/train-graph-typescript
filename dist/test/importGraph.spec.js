"use strict";
var path = require("path");
var testSetUp_1 = require("./utils/testSetUp");
var importGraph_1 = require("../importGraph");
describe('importGraph', function () {
    it('can import the graph data from a file', function () {
        var fileName = path.join(__dirname, 'utils/testGraphData.txt');
        var expectedResult = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
        return importGraph_1.default(fileName)
            .then(function (graph) { return testSetUp_1.default(graph, 'to equal', expectedResult); });
    });
});
