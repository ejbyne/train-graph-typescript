"use strict";
var importGraph_1 = require("./importGraph");
var getRouteDistance_1 = require("./getRouteDistance");
var tripData_1 = require("./tripData");
function getTestOutput(fileName) {
    return importGraph_1.default(fileName)
        .then(function (graph) {
        var outputs = [
            getRouteDistance_1.default(graph, 'A-B-C'),
            getRouteDistance_1.default(graph, 'A-D'),
            getRouteDistance_1.default(graph, 'A-D-C'),
            getRouteDistance_1.default(graph, 'A-E-B-C-D'),
            getRouteDistance_1.default(graph, 'A-E-D'),
            tripData_1.getNumberOfTripsWithMaxStops(graph, 'C', 'C', 3),
            tripData_1.getNumberOfTripsWithExactStops(graph, 'A', 'C', 4),
            tripData_1.getShortestTripDistance(graph, 'A', 'C'),
            tripData_1.getShortestTripDistance(graph, 'B', 'B'),
            tripData_1.getNumberOfTripsLessThanDistance(graph, 'C', 'C', 30),
        ];
        return outputs.reduce(function (aggOutput, output, index) {
            return aggOutput + "Output #" + (index + 1) + ": " + output + "\n";
        }, '');
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTestOutput;
