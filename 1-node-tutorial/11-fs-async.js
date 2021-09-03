const { readFile, writeFile } = require('fs');
const path = require('path');

console.log('start');
const firstFile = path.join('content', 'first.txt');
const secondFile = path.join('content', 'second.txt');
const resultFile = path.join('content', 'result-sync.json');
console.log(firstFile);
console.log(secondFile);

readFile(firstFile, 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(secondFile, 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    const data = JSON.stringify(`${first}, ${second}`);
    writeFile(resultFile, data, 'utf8', (err) => {
      if (err) throw err;
      console.log('The file has been saved');
      console.log('done with this task');
    });
  });
});
console.log('starting the next one');
