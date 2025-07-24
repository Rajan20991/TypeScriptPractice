let value: string | number;
value = "hello"; // ✅ OK
value = 123;     // ✅ OK
//value = true;    // ❌ Error: boolean not allowed
function greet(user: string | number): string | number {
  if (typeof user === "string") {
    return `Hello, ${user}!`;
  } else {
    return user;
  }
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet(30)); 

function riskyPrint(data: string | number) {
  // console.log(data.toUpperCase()); ❌ Error: number may not have toUpperCase
  if (typeof data === 'string') {
    console.log(data.toUpperCase()); // ✅ safe
  }
}
