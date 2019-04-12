let myMap = new Map();

let keyString = "строка",
    keyObj = {},
    keyFunc = function() {};

// устанавливаем значения
myMap.set(keyString, "значение, связанное со 'строка'");
myMap.set(keyObj, "значение, связанное с keyObj");
myMap.set(keyFunc, "значение, связанное с keyFunc");
myMap.set('sss', function(){return false});

myMap.size; // 3

// получаем значения
console.log(myMap.get(keyString));    // "значение, связанное со 'строка'"
console.log(myMap.get(keyObj));       // "значение, связанное с keyObj"
console.log(myMap.get(keyFunc));      // "значение, связанное с keyFunc"
console.log(myMap.get('sss'));      // "значение, связанное с keyFunc"

/**
 * WeakMap это Map, в котором ключи обладают неустойчивыми связями, что позволяет не мешать сборщику мусора удалять элементы WeakMap. 
 * Это означает, что можно не беспокоиться об утечках памяти.
    Стоить отметить, что в WeakMap, в отличие от Map, каждый ключ должен быть объектом.
    Для WeakMap есть только четыре метода: delete(ключ), has(ключ), get(ключ) и set(ключ, значение).
 */

let w = new WeakMap();
w.set('a', 'b');
// Uncaught TypeError: Invalid value used as weak map key

var o1 = {},
    o2 = function(){},
    o3 = window;

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

w.get(o3); // undefined, потому что это заданное значение

w.has(o1); // true
w.delete(o1);
w.has(o1); // false