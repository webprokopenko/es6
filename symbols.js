let isAdmin = Symbol("isAdmin");

let user = {
  name: "Вася",
  [isAdmin]: true
};

console.log(user[isAdmin]); // true

for(let i in user){
    console.log(i);
}

console.log(Object.getOwnPropertySymbols(user));


let user1 = {
    name: "Вася",
    age: 30,
    [Symbol.for("isAdmin")]: false
  };
  
  // в цикле for..in также не будет символа
  console.log( Object.keys(user1) ); // name, age
  
  // доступ к свойству через глобальный символ — работает
  console.log( user1[Symbol.for("isAdmin")] );