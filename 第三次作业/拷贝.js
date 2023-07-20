//浅拷贝
function shallowCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = obj[key];
      }
    }
  
    return copy;
}
  
const originalObject1 = { a: 1, b: { c: 2 } };
const shallowCopiedObject = shallowCopy(originalObject);
console.log(shallowCopiedObject); // 输出: { a: 1, b: { c: 2 } }
console.log(originalObject.b === shallowCopiedObject.b); // 输出: true (浅拷贝，b属性是引用类型，复制后仍然指向原对象的b属性)
//深拷贝
function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
}

const originalObject2 = { a: 1, b: { c: 2 } };
const deepCopiedObject = deepCopy(originalObject);
console.log(deepCopiedObject); // 输出: { a: 1, b: { c: 2 } }
console.log(originalObject.b === deepCopiedObject.b); // 输出: false (深拷贝，b属性是引用类型，复制后不再指向原对象的b属性)
    
