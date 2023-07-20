function add(x) {
  let sum = x;
  
  function innerAdd(y) {
    sum += y;
    return innerAdd;
  }
  
  innerAdd.toString = function () {
    return sum;
  };
  
  return innerAdd;
}
  
console.log(add(1)(2)(3)); // 输出: 6
console.log(add(5)(10)(-2)(8)); // 输出: 21
  