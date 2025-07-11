interface user{
    name: string;
    age:number;
    isAge ? : boolean;//optional field
}

const tester : user ={name:'rajan',age:34};
const tester2 : user ={name:'rajan2',age:35,isAge:true};

function greet(user:user): void{
    console.log(`Hello ${user.name}`);
    console.log(`Hello ${user.name}, age ${user.age}`);
    if(user.isAge){
        console.log(user);
}
}

greet(tester);
greet(tester2);
