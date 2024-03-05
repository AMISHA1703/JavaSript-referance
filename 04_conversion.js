//  conversion

let variableString="Amisha";
console.log( variableString);
console.log(typeof(variableString));
console.log(Number(variableString));// output=NaN because string like"Amisha, 33abc" cannot be converted into Number but "33" can be converted into number
console.log(Boolean(variableString))


let variableBlank="";
console.log(variableBlank);// output is blank
console.log(typeof(variableBlank));
console.log(Number(variableBlank));// VVVVVIIIII
console.log(Boolean(variableBlank));

let variableNumber="24";
console.log( variableNumber);
console.log(typeof (variableNumber));
//conversion string to number using Number() object
console.log(Number(variableNumber));// only for terminal not in real
variableNumber=Number(variableNumber); // conversion in real
console.log(typeof (variableNumber));
console.log(Boolean (variableNumber));
console.log(String (variableNumber));


console.log(typeof(true));
console.log(Number(true));



