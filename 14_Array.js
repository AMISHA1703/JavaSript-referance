//declare
const array=[1,'r',6];
console.log(array[1]);

const array2=new Array(1,2,'j');
console.log(array2);

//array methods:

array.push(1);
array.push(7);
array.push(79);
array.pop();
console.log(array);


array.unshift(19); // add element to start of array
console.log(array);
array.shift(); //remove shifted elemnt ,no need to pass argument 
console.log(array);


console.log(array.includes(19));// h ya nhi : in boolean

console.log(array.indexOf(25));// if not found return invalid indexi.e -1

// join method change the typeof:
const newarray=array2.join();
console.log(newarray);
console.log(  newarray);
console.log(typeof array2);

//slice, splice

console.log(array.slice(1,4));

console.log(array.splice(1,4));
// difference between slice and splice

console.log(array);  //splice ko use krne se original array me chnge hota h


