let arr = [1,2,3,4];
function spread(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

spread(...arr);


function rest(...args){
    console.log(args);
}

rest(1,2,3,4,5);