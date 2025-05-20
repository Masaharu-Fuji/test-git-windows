/* 6-1.1 */

// for (let index = 1; index <= 100; index++) {
//   console.log(index);
// }

/* 6-1.2 */

const findMax = (numbers) => {
  let max = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
  }
  // return max;
  console.log(max);
}

findMax([12, 3, 45, 7, 18]);

/* 6-1.3 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('John', 20);
person.sayHi();
