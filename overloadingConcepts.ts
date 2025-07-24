// Function overload signatures
function greet(name: string): string;
function greet(age: number): string;

// Function implementation
function greet(value: string | number): string {
  if (typeof value === "string") {
    return `Hello, ${value}!`;
  } else {
    return `You are ${value} years old.`;
  }
}

// Usage
console.log(greet("Alice")); // Hello, Alice!
console.log(greet(30));      // You are 30 years old.
// console.log(greet(true)); // ❌ Error: No overload matches this call

