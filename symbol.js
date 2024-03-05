// declaration:


// use for unique identification

const variableName = Symbol();
console.log(variableName);
console.log(typeof variableName);

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym2==sym3);

// console.log(Boolean(10>9));


