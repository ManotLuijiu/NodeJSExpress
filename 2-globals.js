console.log(__dirname);
// setInterval(() => {
//   let i = 0;
//   while (i < 3) {
//     console.log('hello world', i);
//     i++;
//   }
// }, 1000);

let i = 0;

let intervalId = setInterval(() => {
  if (i === 10) {
    clearInterval(intervalId);
  }
  console.log(i);
  i++;
}, 1000);

// let j = 0;

// while (j !== 10) {

//   console.log(j);
//   j++;
// }
