import * as path from 'path';
import getTestOutput from './getTestOutput';
const fileName = path.join(__dirname, '../data/graph.txt');
getTestOutput(fileName)
    .then(testOutput => console.log(testOutput));
