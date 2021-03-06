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

it("should return the sum of multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should return the sum of inputs with new line (\n)", () => {
	expect(add("1,2\n3")).toBe(6);
});

it("should throw an error if string includes a negative number", () => {
	expect(function(){add("1,2,-3,\n4")}).toThrow(new Error("Negatives not allowed: -3,"));
});