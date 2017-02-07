"use strict";
var testSetUp_1 = require("./utils/testSetUp");
var tripData_1 = require("../tripData");
describe('tripData', function () {
    describe('getNumberOfTripsWithMaxStops', function () {
        it('returns 1 when there is only one possible trip', function () {
            var graph = ['AB5', 'BC4'];
            var startNode = 'A';
            var destinationNode = 'C';
            var maxStops = 2;
            var expectedResult = 1;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
        it('returns 0 when no such trip exists', function () {
            var graph = ['AB5', 'BC4'];
            var startNode = 'A';
            var destinationNode = 'D';
            var maxStops = 4;
            var expectedResult = 0;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
        it('returns 0 when the only possible trip has more than the maximum stops', function () {
            var graph = ['AB5', 'BC4', 'CD2'];
            var startNode = 'A';
            var destinationNode = 'D';
            var maxStops = 1;
            var expectedResult = 0;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
        it('can process more than one possible trip', function () {
            var graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            var startNode = 'C';
            var destinationNode = 'C';
            var maxStops = 3;
            var expectedResult = 2;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
    });
    describe('getNumberOfTripsWithExactStops', function () {
        it('returns 1 when there is only one possible trip', function () {
            var graph = ['AB5', 'BC4', 'AC9'];
            var startNode = 'A';
            var destinationNode = 'C';
            var exactStops = 2;
            var expectedResult = 1;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('returns 0 when no such trip exists', function () {
            var graph = ['AB5', 'BC4'];
            var startNode = 'A';
            var destinationNode = 'D';
            var exactStops = 4;
            var expectedResult = 0;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('returns 0 when the only possible trip has more than the exact stops', function () {
            var graph = ['AB5', 'BC4', 'CD2'];
            var startNode = 'A';
            var destinationNode = 'D';
            var exactStops = 1;
            var expectedResult = 0;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('returns 0 when the only possible trip has fewer than the exact stops', function () {
            var graph = ['AB5', 'BC4', 'CD2'];
            var startNode = 'A';
            var destinationNode = 'C';
            var exactStops = 3;
            var expectedResult = 0;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('can process more than one possible trip', function () {
            var graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            var startNode = 'A';
            var destinationNode = 'C';
            var exactStops = 4;
            var expectedResult = 3;
            testSetUp_1.default(tripData_1.getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
    });
    describe('getShortestTripDistance', function () {
        it('can calculate the shortest distance between two nodes', function () {
            var graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            var startNode = 'A';
            var destinationNode = 'C';
            var expectedResult = 9;
            testSetUp_1.default(tripData_1.getShortestTripDistance(graph, startNode, destinationNode), 'to equal', expectedResult);
        });
        it('will ignore trips which return to the start node before they reach the destination node', function () {
            var graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            var startNode = 'B';
            var destinationNode = 'B';
            var expectedResult = 9;
            testSetUp_1.default(tripData_1.getShortestTripDistance(graph, startNode, destinationNode), 'to equal', expectedResult);
        });
    });
    describe('getNumberOfTripsLessThanDistance', function () {
        it('can calculate the number of trips less than a specified distance', function () {
            var graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            var startNode = 'C';
            var destinationNode = 'C';
            var distance = 30;
            var expectedResult = 7;
            testSetUp_1.default(tripData_1.getNumberOfTripsLessThanDistance(graph, startNode, destinationNode, distance), 'to equal', expectedResult);
        });
    });
});
