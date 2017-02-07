import * as fs from 'fs';

function importGraph(fileName: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data.split(', '));
    });
  });
}

export default importGraph;
