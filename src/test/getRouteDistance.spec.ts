import expect from './utils/testSetUp';
import getRouteDistance from '../getRouteDistance';

describe('getRouteDistance', () => {
  let graph: Array<string>;

  before(() => {
    graph = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7'];
  });

  it('can calculate the distance between two nodes', () => {
    const route: string = 'A-D';
    const expectedResult: number = 5;

    expect(getRouteDistance(graph, route), 'to equal', expectedResult);
  });

  it('can calculate the distance between more than two nodes', () => {
    const route: string = 'A-E-B-C-D';
    const expectedResult: number = 22;

    expect(getRouteDistance(graph, route), 'to equal', expectedResult);
  });

  it('will return NO SUCH ROUTE if the route does not exist', () => {
    const route: string = 'A-E-C-B-E';
    const expectedResult: string = 'NO SUCH ROUTE';

    expect(getRouteDistance(graph, route), 'to equal', expectedResult);
  });
});
