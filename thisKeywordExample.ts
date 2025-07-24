class TestRunner {
  testName = "LoginTest";

  run() {
    console.log(`Running ${this.testName}`);
  }
}

const runner = new TestRunner();
setTimeout(runner.run, 1000); // 
//setTimeout(runner.run, 1000); // ❌ `this` is undefined

// ✅ Fix:
setTimeout(() => runner.run(), 1000);

//The arrow function captures the runner instance from its outer scope.


//When runner.run() is called inside the arrow function, the method is called properly with runner as this.


