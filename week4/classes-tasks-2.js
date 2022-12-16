console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {

      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }

  const p1 = new Player("David Jones", 25, 175, 75);

  console.log(p1.getAge());
  console.log(p1.getHeight());
  console.log(p1.getWeight());

}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    add() {
      return this.x + this.y;
    }
    subtract() {
      return this.x - this.y;
    }
    multiply() {
      return this.x * this.y;
    }
    divide() {
      return this.x / this.y;
    }
  }

  const calculator = new Calculator(10, 5);

  console.log(calculator);
  console.log('add:', calculator.add());
  console.log('subtract:', calculator.subtract());
  console.log('multiply:', calculator.multiply());
  console.log('divide:', calculator.divide());
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    printFirstname() {
      return `${this.firstname}`;
    }
    printFullname() {
      return `${this.firstname} ${this.lastname}`;
    }
    printEmail() {
      return `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
    }
  }

  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");

  console.log('----Firstname----');
  console.log(emp1.printFirstname());
  console.log(emp2.printFirstname());
  console.log(emp3.printFirstname());

  console.log('----Fullname----');
  console.log(emp1.printFullname());
  console.log(emp2.printFullname());
  console.log(emp3.printFullname());

  console.log('----------Email----------');
  console.log(emp1.printEmail());
  console.log(emp2.printEmail());
  console.log(emp3.printEmail());

}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {

      if (this.age < other.age) {
        return `${other.name} is older than me.`;
      }

      if (this.age === other.age) {
        return `${other.name} is the same age as me.`;
      }

      else {
        return `${other.name} is younger than me`;
      }
    }
  }

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));

}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea() { return this.sideA * this.sideB }
    getPerimeter() { return (this.sideA + this.sideB) * 2 }
  }

  class Circle {

    constructor(radius) {
      this.radius = radius
    }

    getArea() {
      return Math.PI * (this.radius * this.radius);
    }

    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  const circy = new Circle(11);

  console.log('---getArea:(radius 11)---')
  console.log(circy.getArea());
  console.log('---getPerimeter:(radius 11)---')
  console.log(circy.getPerimeter());


  const circy1 = new Circle(4.44);
  console.log('---getArea:(radius 4.44)---')
  console.log(circy1.getArea());
  console.log('---getPerimeter:(radius 4.44)---')
  console.log(circy1.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1);
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.fullname = fname[0].toUpperCase() + fname.slice(1) + ' ' + lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      this.intials = fname[0].toUpperCase() + '.' + lname[0].toUpperCase();
    }
  }


  const a1 = new Name("john", "SMITH");
  console.log("-----john SMITH-----");
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.intials);

}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {

    constructor(flavor, numSprinkles) {
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  function sweetestIcecream(arr) {
    const sweetIceCream = {
      "Plain": 0,
      "Vanilla": 5,
      "ChocolateChip": 5,
      "Strawberry": 10,
      "Chocolate": 10,
    };

    let resultIcecream = arr.map(arr => sweetIceCream[arr.flavor] + arr.numSprinkles);
    return Math.max(...resultIcecream);
  }

  const ice1 = new IceCream("Chocolate", 13);
  const ice2 = new IceCream("Vanilla", 0);
  const ice3 = new IceCream("Strawberry", 7);
  const ice4 = new IceCream("Plain", 18);
  const ice5 = new IceCream("ChocolateChip", 3);


  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  console.log(sweetestIcecream([ice3, ice1]));
  console.log(sweetestIcecream([ice3, ice5]));

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {

    constructor(numbers) {
      this.ones = Math.floor(numbers / 1);
      this.threes = Math.floor(numbers / 3);
      this.nines = Math.floor(numbers / 9);
    }
  }

  const n1 = new OnesThreesNines(5);

  console.log(n1.nines);
  console.log(n1.ones);
  console.log(n1.threes);

}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0;

    constructor(name) {
      this.name = name;
    }
    username() {
      return this.name;
    }
    userCount() {
      return User.userCount += 1;
    }
  }

  const u1 = new User("johnsmith10");
  console.log(u1.username());
  console.log(u1.userCount());

  const u2 = new User("marysue1989");
  console.log(u2.username());
  console.log(u2.userCount());

  const u3 = new User("milan_rodrick");
  console.log(u3.username());
  console.log(u3.userCount());

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{

  class Book {

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return "Title: " + this.title;
    }
    getAuthor() {
      return "Author: " + this.author;
    }
  }

  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');
  const HP = new Book('Harry Potter', 'J.K. Rowling');


  console.log('----PP----');
  console.log(PP.getTitle());
  console.log(PP.getAuthor());

  console.log('----H----');
  console.log(H.getTitle());
  console.log(H.getAuthor());

  console.log('----WP----');
  console.log(WP.getTitle());
  console.log(WP.getAuthor());

  console.log('----HP----');
  console.log(HP.getTitle());
  console.log(HP.getAuthor());

}
console.groupEnd();