let count = 0;

function print(a, b) {
  if (count <= b) {
    console.log(count);
    count += 1;
  }
}
function printNumbers(a, b) {
  count = a;
  setInterval(print, 1000, a, b);
}
printNumbers(2, 5);



// let count = 0;

// function print(a, b) {
//   if (count <= b) {
//     console.log(count);
//     count += 1;
//   }
// }
// function printNumbers(a, b) {
//   count = a;
//   setTimeout(print, 1000, a, b);
// }
// printNumbers(2, 20);



// const printNumbers = (a, b) => {
//   for (let i = a; i < b; i++) {
//       setTimeout(() => console.log(i), 1000 * i);
//   }
// }; 
