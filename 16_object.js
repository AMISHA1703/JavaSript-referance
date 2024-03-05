// declaration
const variableSymbol=Symbol("value:2")

const user={
    name:"Amisha",
    Age:20,
    IsLoggedIn:true,
    LoggedDays:["Monday","Saturday"],
    "email":"amisha@gmail.com",
    variableSymbol:"value:1"

}
//Access:

console.log("Another way to access:",user.name);
console.log("Another way to access:",user.Age);
console.log("Another way to access:",user.email);
console.log("Another way to access:",user.variableSymbol);
console.log("data type of :",typeof variableSymbol);




console.log(user["name"]);
console.log(user["Age"]);
console.log(user["email"]);


//........

user.email="singh@gmail.com"; // change

console.log(user["email"]);

console.log(user);

// freeze:

Object.freeze(user);
user.email="kumari@gmail.com"; 
console.log(user);


//........ symbol in object

// const variableSymbol=symbol("value:2")

