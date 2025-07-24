let creds = new Map<string,number>();
creds.set("Rajan",1);
creds.set("Test",2);
creds.set("username",3)

console.log(creds.get("Rajan"));
console.log(creds.has("1"));

for (let [i,j] of creds.entries()){
    console.log(`${i}--> ${j}`);
    if(i==="Rajan"){
        console.log(j);
    }
    else if(j===2){
        console.log(i);
    }
    else{
        console.log(creds.get(i));
    }
}

for (let i of creds.keys()) {
 console.log(`${i}`);
}


for (let j of creds.values()) {
 console.log(`${j}`);
}
