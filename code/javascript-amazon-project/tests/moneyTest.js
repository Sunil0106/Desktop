import { formatCurrency } from "../scripts/utils/money.js";

// test cases
//1.basic test cases
//2.Edge cases

//basic test case
console.log("Test suite:  formatCurrency");
console.log("converts cents into dollars");
if (formatCurrency(2095) == "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

//edge cases
console.log("works with 0");
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

console.log("round ups to the nearest cent");
if (formatCurrency(2000.05) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

//test
//1.mannual test: manually
//disadvantage
//a.Hard to test every situation
//b.Hard to re-test

//2.automated test: use code to test code;

//testing steps
//a.create test suite
//b.Create tests
//c.compare values and display result;

//test suite a group of related test

//testing frameworks: external library that helps us write tests easier
