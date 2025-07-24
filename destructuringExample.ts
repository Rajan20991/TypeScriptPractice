let nos: number[] = [1,2,3];
let [a,b,c,d] = nos;
console.log(c);//3
//console.log(d);//undefined

const obj1={
    nam1:'rajan',
    age1:34,
    male1:true
};

const { nam1,male1 }=obj1;
console.log(male1);

const { nam1 : name2 }=obj1;
console.log(name2);

