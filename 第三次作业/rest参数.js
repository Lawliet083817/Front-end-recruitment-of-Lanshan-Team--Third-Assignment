function multiply(...args) {
  if (args.length === 0) {
    return 0; // 如果没有传入参数，则返回0
  }
    return args.reduce((accumulator, currentValue) => accumulator * currentValue);
  }
  
console.log(multiply(2, 3, 4)); // 输出: 24 (2 * 3 * 4)
console.log(multiply(5, 2, 1, 7)); // 输出: 70 (5 * 2 * 1 * 7)
console.log(multiply()); // 输出: 0 (没有传入参数)
