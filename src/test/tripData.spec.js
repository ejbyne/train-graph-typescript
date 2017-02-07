import expect from './utils/testSetUp';
import { getNumberOfTripsWithMaxStops, getNumberOfTripsWithExactStops, getShortestTripDistance, getNumberOfTripsLessThanDistance, } from '../tripData';
describe('tripData', () => {
    describe('getNumberOfTripsWithMaxStops', () => {
        it('returns 1 when there is only one possible trip', () => {
            const graph = ['AB5', 'BC4'];
            const startNode = 'A';
            const destinationNode = 'C';
            const maxStops = 2;
            const expectedResult = 1;
            expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
        it('returns 0 when no such trip exists', () => {
            const graph = ['AB5', 'BC4'];
            const startNode = 'A';
            const destinationNode = 'D';
            const maxStops = 4;
            const expectedResult = 0;
            expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
        it('returns 0 when the only possible trip has more than the maximum stops', () => {
            const graph = ['AB5', 'BC4', 'CD2'];
            const startNode = 'A';
            const destinationNode = 'D';
            const maxStops = 1;
            const expectedResult = 0;
            expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
        it('can process more than one possible trip', () => {
            const graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            const startNode = 'C';
            const destinationNode = 'C';
            const maxStops = 3;
            const expectedResult = 2;
            expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops), 'to equal', expectedResult);
        });
    });
    describe('getNumberOfTripsWithExactStops', () => {
        it('returns 1 when there is only one possible trip', () => {
            const graph = ['AB5', 'BC4', 'AC9'];
            const startNode = 'A';
            const destinationNode = 'C';
            const exactStops = 2;
            const expectedResult = 1;
            expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('returns 0 when no such trip exists', () => {
            const graph = ['AB5', 'BC4'];
            const startNode = 'A';
            const destinationNode = 'D';
            const exactStops = 4;
            const expectedResult = 0;
            expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('returns 0 when the only possible trip has more than the exact stops', () => {
            const graph = ['AB5', 'BC4', 'CD2'];
            const startNode = 'A';
            const destinationNode = 'D';
            const exactStops = 1;
            const expectedResult = 0;
            expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('returns 0 when the only possible trip has fewer than the exact stops', () => {
            const graph = ['AB5', 'BC4', 'CD2'];
            const startNode = 'A';
            const destinationNode = 'C';
            const exactStops = 3;
            const expectedResult = 0;
            expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
        it('can process more than one possible trip', () => {
            const graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            const startNode = 'A';
            const destinationNode = 'C';
            const exactStops = 4;
            const expectedResult = 3;
            expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops), 'to equal', expectedResult);
        });
    });
    describe('getShortestTripDistance', () => {
        it('can calculate the shortest distance between two nodes', () => {
            const graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            const startNode = 'A';
            const destinationNode = 'C';
            const expectedResult = 9;
            expect(getShortestTripDistance(graph, startNode, destinationNode), 'to equal', expectedResult);
        });
        it('will ignore trips which return to the start node before they reach the destination node', () => {
            const graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            const startNode = 'B';
            const destinationNode = 'B';
            const expectedResult = 9;
            expect(getShortestTripDistance(graph, startNode, destinationNode), 'to equal', expectedResult);
        });
    });
    describe('getNumberOfTripsLessThanDistance', () => {
        it('can calculate the number of trips less than a specified distance', () => {
            const graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
            const startNode = 'C';
            const destinationNode = 'C';
            const distance = 30;
            const expectedResult = 7;
            expect(getNumberOfTripsLessThanDistance(graph, startNode, destinationNode, distance), 'to equal', expectedResult);
        });
    });
});
