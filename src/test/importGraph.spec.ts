import * as path from 'path';
import expect from './utils/testSetUp';
import importGraph from '../importGraph';

describe('importGraph', () => {
  it('can import the graph data from a file', () => {
    const fileName: string = path.join(__dirname, 'utils/testGraphData.txt');
    const expectedResult: Array<string> = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];

    return importGraph(fileName)
      .then(graph => expect(graph, 'to equal', expectedResult));
  });
});
