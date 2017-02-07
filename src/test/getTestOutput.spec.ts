import * as path from 'path';
import expect from './utils/testSetUp';
import getTestOutput from '../getTestOutput';

describe('getTestOutput', () => {
  it('returns the expected test output', () => {
    const fileName: string = path.join(__dirname, '/utils/testGraphData.txt');
    const expectedResult: string = (
`Output #1: 9
Output #2: 5
Output #3: 13
Output #4: 22
Output #5: NO SUCH ROUTE
Output #6: 2
Output #7: 3
Output #8: 9
Output #9: 9
Output #10: 7
`);

    return expect(getTestOutput(fileName), 'to be fulfilled with', expectedResult);
  });
});
