interface Userone{
    name : String,
    email : string;
}

type UserKeys = keyof Userone;

const users:Userone={
    name :"rajan",
    email:"rtiwary@123"
};

function getValue(obj:Userone,keys:UserKeys){
    return obj[keys];
}

const userValue = getValue(users,"name");
console.log(userValue);

const config = {
  baseURL: "https://example.com",
  retries: 3,
};

type ConfigType = typeof config;
console.log( typeof config);

