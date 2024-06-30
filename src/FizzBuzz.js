export default class FizzBuzz {
  divisible(number) {
    if (number % 5 === 0 && number % 3 === 0) {
      return "FizzBuzz";
    }
    if (number % 3 === 0 || number.toString().includes("3")) {
      return "Fizz";
    }
    if (number % 5 === 0 || number.toString().includes("5")) {
      return "Buzz";
    }
  }
  printKata() {
    for (let i = 0; i <= 100; i++) {
      console.log(this.divisible(i) ?? i);
    }
  }
}
const fizzBuzz = new FizzBuzz();
fizzBuzz.printKata();
