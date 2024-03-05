//declaration :

const str1="Amisha";
const str2="Kumari";
const str3=new String("Singh");

const count=30;

// operations:
console.log(str1+" "+str2+" "+str3);
console.log(str1+count);
console.log(str1+count+str2);
console.log(count+str1);
console.log(count+str1);
console.log("HELLO"+count+str1);// outdated

//new syntax

console.log(`My Name is ${str1} ${str2} ${str3}`);  //  ``: backlit
console.log(`My Name is ${str1} ${"Kumari"} ${str3}`);// interpolation expression

console.log(str1[0]);
console.log(str1.__proto__);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.charAt(4));
console.log(str1.toLocaleUpperCase("en-IN"));// "tr","en-US"
console.log(str1.toLocaleLowerCase());
console.log(str1.indexOf("a"));

const anotherString="Find substring from the given text";
console.log( anotherString .substring(0,8))// 0-7
console.log( anotherString .substring(-1,8))// ignor -ve start from 0

const newString=anotherString.slice(-3,3);
console.log( newString );



const str4="         amisha kumari singh        ";
console.log(str4.trim());
console.log(str4.trim().replace('kumari','kri'));
console.log(str4.includes('Mrs'));/// check find or not
console.log(str4.split("i"));







