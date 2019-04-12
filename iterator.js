let arr = [1,2,3,4];
let itr = arr[Symbol.iterator]();

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());


while(!itr.next().done){
    console.log(itr.next())
}