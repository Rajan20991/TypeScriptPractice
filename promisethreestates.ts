function simulateAsync(state : "success"|"fail"):Promise<String>{
    return new Promise ((resolve,reject)=>{
        console.log("Promise is in PENDING state");
        setTimeout(()=>{
            if (state === "success"){
                resolve("Promise is in FULLFILLED state")
            }
            else{
                reject("Promise is in REJECTED state");
            }
        },4000)
    })
}

async function handleAsync(state : "success"|"fail"){
    try{
        const result= await simulateAsync(state);
        console.log(result);
    }
    catch(error){
        console.error(error);
    }
    
}
handleAsync("fail");
handleAsync("success");
console .log("synchronous method")