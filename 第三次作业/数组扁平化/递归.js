function falt(inputArray) {
    let result = [];
    for (let item of inputArray) {
      if (Array.isArray(item)) {
        result = result.concat(flat(item));
      } else {
        result.push(item);
      }
    }
    return result;
}
  
const inputArray = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]];
const outputArray = flat(inputArray);
console.log(outputArray);
  