let str4 = "Playwright";

console.log(str4.length);
console.log(str4.toUpperCase());
console.log(str4.includes("Play"));
console.log(str4.replace("wright", "test"));
console.log(str4.substring(0, 4)); // "Play"
console.log(str4.replaceAll("t","3"));

let str5 = "Playwright is better than selenium";
console.log(str5.split(" "));
console.log(str5.trim());

const language: string = "JavaScript,java,python";
const languages: string[] = language.split(",");
for (const i of languages) {
   if (i === "java") {
       console.log("Found Java");
       break;
   }
}
