const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg 3, 5, 7 should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5)
});

test("avg -3, 3 should be 0", () => {
    expect(lib.avg([-3, 3])).toBe(0)
});

test("13 is prime to be true", () => {
    expect(lib.prime(13)).toBe(true)
});

test("14 is not prime to be false", () => {
    expect(lib.prime(14)).toBe(false)
});

test("5 factorial is to be 120", () => {
    expect(lib.fact(5)).toBe(120)
});

test("6 factorial is to be 720", () => {
    expect(lib.fact(6)).toBe(720)
});