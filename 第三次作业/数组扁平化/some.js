function flat(inputArray) {
    while (inputArray.some(item => Array.isArray(item))) {
      inputArray = [].concat(...inputArray);
    }
    return inputArray;
}
  
const inputArray = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]];
const outputArray = flat(inputArray);
console.log(outputArray);
  