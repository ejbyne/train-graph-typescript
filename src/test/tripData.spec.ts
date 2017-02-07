import expect from './utils/testSetUp';
import {
  getNumberOfTripsWithMaxStops,
  getNumberOfTripsWithExactStops,
  getShortestTripDistance,
  getNumberOfTripsLessThanDistance,
} from '../tripData';

describe('tripData', () => {
  describe('getNumberOfTripsWithMaxStops', () => {
    it('returns 1 when there is only one possible trip', () => {
      const graph: Array<string> = ['AB5', 'BC4'];
      const startNode: string = 'A';
      const destinationNode: string = 'C';
      const maxStops: number = 2;
      const expectedResult: number = 1;

      expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops),
        'to equal', expectedResult);
    });

    it('returns 0 when no such trip exists', () => {
      const graph: Array<string> = ['AB5', 'BC4'];
      const startNode: string = 'A';
      const destinationNode: string = 'D';
      const maxStops: number = 4;
      const expectedResult: number = 0;

      expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops),
        'to equal', expectedResult);
    });

    it('returns 0 when the only possible trip has more than the maximum stops', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD2'];
      const startNode: string = 'A';
      const destinationNode: string = 'D';
      const maxStops: number = 1;
      const expectedResult: number = 0;

      expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops),
        'to equal', expectedResult);
    });

    it('can process more than one possible trip', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
      const startNode: string = 'C';
      const destinationNode: string = 'C';
      const maxStops: number = 3;
      const expectedResult: number = 2;

      expect(getNumberOfTripsWithMaxStops(graph, startNode, destinationNode, maxStops),
        'to equal', expectedResult);
    });
  });

  describe('getNumberOfTripsWithExactStops', () => {
    it('returns 1 when there is only one possible trip', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'AC9'];
      const startNode: string = 'A';
      const destinationNode: string = 'C';
      const exactStops: number = 2;
      const expectedResult: number = 1;

      expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops),
        'to equal', expectedResult);
    });

    it('returns 0 when no such trip exists', () => {
      const graph: Array<string> = ['AB5', 'BC4'];
      const startNode: string = 'A';
      const destinationNode: string = 'D';
      const exactStops: number = 4;
      const expectedResult: number = 0;

      expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops),
        'to equal', expectedResult);
    });

    it('returns 0 when the only possible trip has more than the exact stops', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD2'];
      const startNode: string = 'A';
      const destinationNode: string = 'D';
      const exactStops: number = 1;
      const expectedResult: number = 0;

      expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops),
        'to equal', expectedResult);
    });

    it('returns 0 when the only possible trip has fewer than the exact stops', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD2'];
      const startNode: string = 'A';
      const destinationNode: string = 'C';
      const exactStops: number = 3;
      const expectedResult: number = 0;

      expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops),
        'to equal', expectedResult);
    });

    it('can process more than one possible trip', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
      const startNode: string = 'A';
      const destinationNode: string = 'C';
      const exactStops: number = 4;
      const expectedResult: number = 3;

      expect(getNumberOfTripsWithExactStops(graph, startNode, destinationNode, exactStops),
        'to equal', expectedResult);
    });
  });

  describe('getShortestTripDistance', () => {
    it('can calculate the shortest distance between two nodes', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
      const startNode: string = 'A';
      const destinationNode: string = 'C';
      const expectedResult: number = 9;

      expect(getShortestTripDistance(graph, startNode, destinationNode),
        'to equal', expectedResult);
    });

    it('will ignore trips which return to the start node before they reach the destination node', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
      const startNode: string = 'B';
      const destinationNode: string = 'B';
      const expectedResult: number = 9;

      expect(getShortestTripDistance(graph, startNode, destinationNode),
        'to equal', expectedResult);
    });
  });

  describe('getNumberOfTripsLessThanDistance', () => {
    it('can calculate the number of trips less than a specified distance', () => {
      const graph: Array<string> = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
      const startNode: string = 'C';
      const destinationNode: string = 'C';
      const distance: number = 30;
      const expectedResult: number = 7;

      expect(getNumberOfTripsLessThanDistance(graph, startNode, destinationNode, distance),
        'to equal', expectedResult);
    });
  });
});
