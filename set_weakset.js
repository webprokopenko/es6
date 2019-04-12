/**
 * Объекты Set это коллекции уникальных значений. Дублированные значения игнорируются, 
 * т.к. коллекция должна содержать только уникальные значения. 
 * Значения могут быть примитивами или ссылками на объекты.
 */
let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('строки');
mySet.add({ a: 1, b:2 });
mySet.add({ a: 1, b:2 });
mySet.add('строки');
mySet.add(1);

mySet.forEach((item) => {
    console.log(item);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
});

for (let value of mySet) {
    console.log(value);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
}


/**
 * Аналогично WeakMap, объект WeakSet позволяет хранить объекты с неустойчивыми связями в коллекции. 
 * Объект в WeakSet уникален.
 */

let ws = new WeakSet();
let obj = {};
let foo = {};

ws.add(global);
ws.add(obj);

ws.has(global); // true
ws.has(foo);    // false, foo не был добавлен к коллекции

ws.delete(global); // удаляет window из коллекции
ws.has(global);    // false, window был удалён