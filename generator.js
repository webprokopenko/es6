function* generateSequence(start, end){
    for(let i=start,j=end; i<=j; i++){
        yield i
    }
}
console.log('start');
for(let value of generateSequence(1,11116)){
    console.log(value);
}
console.log('end');

let jt = [...generateSequence(1,20)];
console.log(jt);