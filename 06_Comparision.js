//   >,<,<=,>=,==,!= : true or false 

console.log(Boolean("2">1));
console.log(Boolean("02">1));
console.log(Boolean(null>0));
console.log(Boolean(null==0));
console.log(Boolean(null<0));            //  in comparision work differently
console.log(Boolean(null>=0));         //  here convert null to a number treating as 0


console.log(Boolean(undefined>0));
console.log(Boolean(undefined>0));
console.log(Boolean(undefined==0));

console.log(Boolean("2"==2)); // internal conversion og string
console.log(Boolean("2"===2)); // === strictly check

// Note:
  /* Basically  equality and comparision operator works differently */

