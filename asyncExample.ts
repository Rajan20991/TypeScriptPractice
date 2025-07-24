function fetchuser(): Promise<String>{
    return new Promise((resolve => {
        setTimeout(()=>{
            resolve("John Snow");
        },4000);
    }));
}

async function greetUser() {
    console.log("Fetching user....")
    let user = await fetchuser();
    console.log(`welcome ${user} !`)
    
}
greetUser();
console.log("this will execute before await")