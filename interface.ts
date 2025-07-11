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

//tuples

let userDetails :[string,number,boolean?]=['tester',35,true];

let userDetails2 :[string,number,boolean?]=['tester2',39];

console.log(userDetails,userDetails2);

function getCredentials(): [string, string] {
  return ['sid@test.com', 'securePass'];
}
const [username, password] = getCredentials();
console.log(username);
console.log(password);



