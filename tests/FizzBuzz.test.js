import { describe, expect, it } from "vitest";
import FizzBuzz from "../src/FizzBuzz";

describe("FizzBuzz", () => {
  it("if number is divisible by 3 && 5 should return FizzBuz", () => {
    //given
    const number = 15;
    const fizzBuzz = new FizzBuzz();
    //when
    const result = fizzBuzz.divisible(number);
    //then
    expect(result).toBeTypeOf("string");
    expect(result).contains("FizzBuzz");
  });
  it("if number is divisible by 5 should return Buzz", () => {
    //given
    const number = 1555;
    const fizzBuzz = new FizzBuzz();
    //when
    const result = fizzBuzz.divisible(number);
    console.log(result);
    //then
    expect(result).toBeTypeOf("string");
    expect(result).contains("Buzz");
  });
  it("if number is divisible by 3 should return Fizz", () => {
    //given
    const number = 13;
    const fizzBuzz = new FizzBuzz();
    //when
    const result = fizzBuzz.divisible(number);
    //then
    expect(result).toBeTypeOf("string");
    expect(result).contains("Fizz");
  });
});
