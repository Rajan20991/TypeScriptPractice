// Simulate a flaky async function (fails randomly)
async function flakyOperation(): Promise<string> {
  if (Math.random() > 0) {
    throw new Error("Random failure");
  }
  return "Success!";
}

(async () => {
  try {
    const result = await retry(flakyOperation, 5);
    console.log("Operation succeeded with result:", result);
  } catch (err) {
    console.error("Operation failed after retries:", err);
  }
})();

async function retry<T>(
   fn: () => Promise<T>,
   retries: number = 3
): Promise<T> {
let err: any;
for (let i=0; i<retries;i++){
   try{
       return await fn();
   }catch (e){
       err = e;
}
}
throw err;
}

