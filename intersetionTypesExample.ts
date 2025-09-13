type Locatable = { locator: string };
type Clickable = { click(): void };

type Button = Locatable & Clickable;

const submitButton: Button = {
  locator: "#submit",
  click: () => console.log("Clicked"),
};


type TestPass = { status: "pass"; duration: number };
type TestFail = { status: "fail"; reason: string };
type testSkip = { status: "skip"; state: string};

type TestResult = TestPass | TestFail | testSkip;

function printResult(result: TestResult) {
 switch (result.status) {
   case "pass":
     console.log(`Test passed in ${result.duration}s`);
     break;
   case "fail":
     console.log(`Test failed: ${result.reason}`);
     break;
   case "skip":
     console.log(`Test skipped: ${result.state}`);
     break;
 }
}
printResult({ status: "pass", duration: 5 });
printResult({ status: "fail", reason: "Network error" });
printResult({ status: "skip", state: "Browser not supported" });

