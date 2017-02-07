"use strict";
var path = require("path");
var testSetUp_1 = require("./utils/testSetUp");
var getTestOutput_1 = require("../getTestOutput");
describe('getTestOutput', function () {
    it('returns the expected test output', function () {
        var fileName = path.join(__dirname, '/utils/testGraphData.txt');
        var expectedResult = ("Output #1: 9\nOutput #2: 5\nOutput #3: 13\nOutput #4: 22\nOutput #5: NO SUCH ROUTE\nOutput #6: 2\nOutput #7: 3\nOutput #8: 9\nOutput #9: 9\nOutput #10: 7\n");
        return testSetUp_1.default(getTestOutput_1.default(fileName), 'to be fulfilled with', expectedResult);
    });
});
