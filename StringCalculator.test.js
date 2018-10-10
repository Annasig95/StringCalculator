//stringCalculatorTest.js

const add = require("./StringCalculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number in the string", () => {
	expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});