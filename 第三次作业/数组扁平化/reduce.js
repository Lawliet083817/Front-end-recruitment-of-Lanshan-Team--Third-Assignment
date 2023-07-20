function flat(inputArray) {
    return inputArray.reduce((acc, item) => {
      return acc.concat(Array.isArray(item) ? flat(item) : item);
    }, []);
}
  
const inputArray = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]];
const outputArray = flat(inputArray);
console.log(outputArray);
  