"use strict";
var testSetUp_1 = require("./utils/testSetUp");
var getRouteDistance_1 = require("../getRouteDistance");
describe('getRouteDistance', function () {
    var graph;
    before(function () {
        graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
    });
    it('can calculate the distance between two nodes', function () {
        var route = 'A-D';
        var expectedResult = 5;
        testSetUp_1.default(getRouteDistance_1.default(graph, route), 'to equal', expectedResult);
    });
    it('can calculate the distance between more than two nodes', function () {
        var route = 'A-E-B-C-D';
        var expectedResult = 22;
        testSetUp_1.default(getRouteDistance_1.default(graph, route), 'to equal', expectedResult);
    });
    it('will return NO SUCH ROUTE if the route does not exist', function () {
        var route = 'A-E-C-B-E';
        var expectedResult = 'NO SUCH ROUTE';
        testSetUp_1.default(getRouteDistance_1.default(graph, route), 'to equal', expectedResult);
    });
});
