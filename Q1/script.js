let input = prompt("Enter your Numbers with ',' separator ");
let array = input.split(",");
// console.log(array);

function inverse(array) {
  let flag = true;
  for (let i = 0, j = -1; i < array.length / 2; i++, j--) {
    if (array.at(i) !== array.at(j)) flag = false;
  }
  return flag;
}

let x = inverse(array);
if (x == true) {
  console.log("array is inverse");
} else {
  console.log("array isn't inverse");
}
