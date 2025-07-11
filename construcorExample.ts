//Optional Parameter Constructor
class Users {
 name: string;
 email?: string;


 constructor(name: string, email?: string) { //paramaterized constructor
   this.name = name;
   //this.email = email;
   console.log(name);
 }
}


//Default Constructor

class Users3 {
 constructor(){
   console.log ("its a default constructor");
 }
}

let user1 =new Users("abcd");


