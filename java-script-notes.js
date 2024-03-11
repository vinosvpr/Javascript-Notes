// console.log("Test");

// Variable
// var person = {
//     firstName : 'Vinoth',
//     lastName : 'Thiru',
//     age  : 32,
//     ownsCar : false,
//     family : {
//         dad : { name : 'ThiruMoorthy'},
//         mom : { name : 'JayaLakshmi'},
//         wife : {
//             name : 'Gayathri',
//             dad : 'Lekshmanan',
//             mom : 'Usha',
//             brother : 'Karthick'
//         },
//         elderSister : {
//             name : 'Indhumathi',
//             husband : 'Saravanan'
//         },
//         youngerSister : {
//             name : 'Alagutamil',
//             husband : 'Kanagavel',
//             daughter : 'Maadhulha - The Princess'
//         }
//     }
// }
// console.log(person.family.wife.name ,person.family.youngerSister.daughter);

// end

// Functions

// function myFunction(){
//     console.log('hello');
// }
// myFunction();
// end

// Modules and Modularity

// In JavaScript, modularity refers to the practice of breaking down code into smaller,
// reusable parts called modules. Modules help organize code, improve maintainability,
// and facilitate collaboration among developers.
// There are several ways to achieve modularity in JavaScript:

// const calculator = require('./calc')

// calculator.addition(2, 3);
// calculator.subtraction(2, 3);
// calculator.multiplication(2, 3);
// calculator.division(2, 3);
// end

// Ternary operator

// const checkSquare = (x)=>( x*x%2===0 ? false:false);
// const checkSquare = (x)=>( x*x%2===0 ? 'is Even':'is Odd');
// console.log(checkSquare(124));
// End

// Callback Function

// In JavaScript, a callback function is a function that is passed as an
// argument to another function and is executed after a particular operation,
// often asynchronously, has been completed or when a certain event occurs.
// Callback functions are commonly used in scenarios like handling asynchronous tasks,
// event handling, and implementing higher-order functions.

// Callback functions are fundamental in handling asynchronous operations like making API requests,
// reading files, handling user input, and more. They allow JavaScript to continue
// executing other code while waiting for time-consuming tasks to finish,
// improving the overall responsiveness of applications.

// function fetchData(callback) {
//   // Simulating an asynchronous operation (e.g., fetching data from an API)
//   setTimeout(function () {
//     const data = "This is the fetched data";
//     callback(data); // Invoking the callback function with the fetched data
//   }, 5000); // Simulating a 2-second delay
// }

// function displayData(data) {
//   console.log("Data received:", data);
// }

// // Passing the displayData function as a callback to fetchData
// fetchData(displayData);

// Methods

// push() Method:
// The push() method adds one or more elements to the end of an array.
// It modifies the original array and returns the new length of the array.

// const array = [1, 2, 3];
// array.push(4); // Adds 4 to the end of the array
// console.log(array); // Output: [1, 2, 3, 4]

// pop() Method:
// The pop() method removes the last element from an array.
// It modifies the original array and returns the removed element.

// const array = [1, 2, 3];
// const removedElement = array.pop(); // Removes 3 from the end of the array
// console.log(array); // Output: [1, 2]
// console.log(removedElement); // Output: 3

// shift() Method:
// The shift() method removes the first element from an array.
// It modifies the original array and returns the removed element.

// const array = [1, 2, 3];
// const removedElement = array.shift(); // Removes 1 from the beginning of the array
// console.log(array); // Output: [2, 3]
// console.log(removedElement); // Output: 1

// unshift() Method:
// The unshift() method adds one or more elements to the beginning of an array.
// It modifies the original array and returns the new length of the array.

// const array = [2, 3];
// array.unshift(1); // Adds 1 to the beginning of the array
// console.log(array); // Output: [1, 2, 3]

// concat():
// Concatenates two or more arrays and returns a new array.

// const array1 = [1, 2];
// const array2 = [3, 4];
// const newArray = array1.concat(array2); // [1, 2, 3, 4]
// console.log(newArray);

// slice():
// Extracts a section of an array and returns a new array.

// const array = [1, 2, 3, 4, 5];
// const slicedArray = array.slice(1, 4); // [2, 3, 4]
// console.log(slicedArray)

// splice():
// Adds/removes elements in place and returns the removed elements.

// const array = [1, 2, 3, 4, 5];
// array.splice(2, 1, 'a', 'b'); // Removes 1 element at index 2 and adds 'a' and 'b'
// // array is now: [1, 2, 'a', 'b', 4, 5]
// console.log(array);

// forEach():
// Executes a provided function once for each array element.

// const array = [1, 2, 3];
// array.forEach((element) => console.log(element)); // Output: 1, 2, 3
// console.log(array);

// indexOf():
// Returns the first index at which a given element can be found.
// const array = [1, 2, 3, 4, 5];
// const index = array.indexOf(3); // 2
// console.log(index);

// filter():
// Creates a new array with elements that pass a test.

// const array = [1, 2, 3, 4, 5];
// const filteredArray = array.filter((element) => element > 2); // [3, 4, 5]
// console.log(filteredArray)

// join():
// Joins all elements of an array into a string.

// const array = [1, 2, 3];
// const joinedString = array.join('-'); // "1-2-3"
// console.log(joinedString)

// reverse():
// Reverses the elements of an array in place.

// const array = [1, 2, 3];
// array.reverse(); // [3, 2, 1]
// console.log(array);

// using forloop - reverse the array

// function reverseArray(arr){

//   const len = arr.length;
//   const lastindex = len - 1;

//   for(let i = 0; i < len/2; i++){
//     const temp = arr[i];
//     arr[i] = arr[lastindex - i];
//     arr[[lastindex - i]] = temp;
//   }

// }
// const originalArray = [1,122,13,42,51, 52, 121, 122];
// const reversedArray = originalArray.reverse() .sort()
// const filterdData = reversedArray.filter(res => res === 122);
// const uniqueArray = [...new Set(originalArray)];
// reverseArray(originalArray);
//reversed array
// console.log(`reversed array ${originalArray}`)
// console.log(`reversed array ${reversedArray}`)
// console.log(`filtered array ${filterdData}`)
// console.log(`Unique no in array ${uniqueArray}`)

// //reversed array length
// console.log(`reversed array length ${originalArray.length}`)

// // print reversed array one by one
// for(let i=0; i<originalArray.length;i++){
// console.log(`printing reverser array one by one ${originalArray[i]}`)
// }

// end

// split() method

// const inputString = "hello";
// const separateChar = inputString.split('');
// for(let i=0; i<separateChar.length; i++){
//   console.log(`Seperated string using split ${separateChar[i]}`)
// }
// // without using split
// const stringname = "vinoth";
// const stringname2 = "narayanan"
// for(let i=0; i < stringname.length; i++){
//   console.log(stringname[i])
// }
// // reverse the string
// const conatename = stringname.concat(stringname2);
// function reverseString(str){
//   return str.split('').reverse().join('');
// }

// const reversedString = reverseString(stringname)

// for(let j =0; j<reversedString.length; j++){
//   console.log(reversedString[j])

// }
// console.log(`concatenate name: ${conatename}`)

//end

// some() Method:
// The some() method tests whether at least one element in the array passes the test
// implemented by the provided function. It returns false if the callback function
// returns false for at least one element; otherwise, it returns false.

// const array = [1, 2, 3, 4, 5];

// // Checking if at least one element is greater than 3
// const greaterThanThree = array.some((element) => element > 3);
// console.log(greaterThanThree); // Output: false

// every() Method:
// The every() method tests whether all elements in the array pass the test implemented
// by the provided function. It returns false if the callback function returns false
// for every element; otherwise, it returns false.

// const array = [1, 2, 3, 4, 5];

// // Checking if all elements are greater than 0
// const allGreaterThanZero = array.every((element) => element > 0);
// console.log(allGreaterThanZero); // Output: false

// // Checking if all elements are even
// const allEven = array.every((element) => element % 2 === 0);
// console.log(allEven); // Output: false

// map()
// is a higher-order array method used to iterate over an array and transform its elements.
// It applies a provided function to each element of the array and returns a new array with
// the results of calling that function on every element.
// The map() method does not change the original array; it creates and returns a new array.
// It's commonly used for transforming data, applying a function to each element to derive a
//  new set of values, such as formatting, calculations, or modifications to elements.
// The callback function used with map() can also return different types of values,
// resulting in an array of mixed types.
// Ensure that the callback function used in map() does not mutate the original
// array or its elements, as it's intended for creating a new transformed array.

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((num) => {
//   return num * num;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// This Keyword
// function displayThis(){
//     console.log(this.performance.nodeTiming.duration)
// }
// displayThis()
// let myObj = {
//         name:'Vinoth',
//         role:'UI Developer',
//         company:'BigInfoLabs',
//         myFn: function(){
//             function myFn1(){
//                 console.log(this);
//             }
//             myFn1()
//         }
// }
// myObj.myFn();
// console.log(this)

// function createCar(_name, _company, _color){
//     this.name= _name;
//     this.companny = _company;
//     this.color = _color;
//     this.drive = function(){
//         console.log(`I am driving ${this.name} and it is ${this.color}color`)
//     }
// }
// let car1 = new createCar('D220', 'Meercedus', 'Lavendar');
// let car2 = new createCar('D2201', 'Meercedus', 'Blue');

// // console.log(car1.color, car2.color);
// car2.drive();

// End

// Classes
// class person{
//     constructor(_name, _age){
//         this.name = _name
//         this.age = _age
//     }
//     welcome(){
//         console.log(`This is ${this.name} & my age is ${this.age}`)
//     }
// }

// let person1 = new person('Vinoth', 32);
// let person2 = new person('Gayathri', 28);
// person1.welcome()
// person2.welcome()

// End

// constructor

// In JavaScript classes, the constructor is a special method used for
// initializing objects created from a class. It's automatically called
// when a new instance of the class is created, and it's where you define the
// initial state or properties of the object.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

// End

// Inheritance
// Inheritance in JavaScript allows one class to inherit properties and methods
// from another class. This concept facilitates code reuse and establishes
// a hierarchy between classes.

// class Person{
//     constructor(_name, _age){
//         this.name=_name
//         this.age = _age
//     }
//     greet(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old`
//     }
// }
// class Student extends Person{
//     constructor(_name, _age, _rank, _classStrength){
//         super(_name, _age)
//         this.rank = _rank
//         this.classStrength = _classStrength
//     }
//     study(){
//         return `Student ${this.name} is holding ${this.rank}st rank out of ${this.classStrength} students`
//     }
// }
// let Person1 = new Person('Vinoth', 32);
// let Student1 = new Student('Vinoth', 32, 1, 76);

// console.log(Student1.study())

// End

// Adding Json data into the student list

// const studentData = [
//     {
//         "name" : "Vinoth",
//         "age" : 11,
//         "grade" : "6th"
//     },
//     {
//         "name" : "Gayathri",
//         "age" : 10,
//         "grade" : "5th"
//     },
//     {
//         "name" : "Indhu",
//         "age" : 12,
//         "grade" : "7th"
//     },
//     {
//         "name" : "Alagu",
//         "age" : 9,
//         "grade" : "4th"
//     }
// ]

// class Student {
//     constructor(name, age, grade){
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     study(){
//                 return `Student ${this.name} is ${this.age}years old and studying in ${this.grade} grade`
//             }
// }

// const studentList = studentData.map(student => new Student(student.name,  student.age,  student.grade));

// studentList.forEach(student => {
//     console.log(student.study());
// })
// console.log(studentList[0].study())

// If you are working with Node.js, you can read the JSON file using the fs module:

// const fs = require('fs');

// fs.readFile('students.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   const studentData = JSON.parse(data);
//   console.log(studentData); // Access the parsed JSON data here
//   // Further processing or usage of the data
// });

//using js

// fetch('students.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(studentData => {
//     // Now 'studentData' contains the parsed JSON data
//     // console.log(studentData); // Access the fetched JSON data here
//     console.log(studentData[0]); // Access the fetched JSON data here
//     // Further processing or usage of the data
//   })
//   .catch(error => {
//     console.error('Fetch failed:', error);
//   });

// End

// Polymorphism
// Polymorphism is a fundamental concept in object-oriented programming that allows
// objects of different classes to be treated as objects of a common superclass.
// It enables a single interface to represent multiple underlying forms (types of objects).

// Polymorphism in JavaScript:
// JavaScript uses prototypal inheritance rather than classical inheritance,
// but it supports polymorphism through method overriding and dynamic binding.

// class Animal {
//     sound() {
//       console.log("Animal makes a sound");
//     }
//   }

//   class Dog extends Animal {
//     sound() {
//       console.log("Dog barks");
//     }
//   }
//   class Cat extends Animal {
//     sound() {
//       console.log("Cat Meow");
//     }
//   }
//   const animal = new Animal();
//   const dog = new Dog();
//   const cat = new Cat();

//   animal.sound(); // Output: Animal makes a sound
//   dog.sound(); // Output: Dog barks
//   cat.sound(); // Output: Cat Meow

//   End

// Encapsulation

// Encapsulation is one of the core principles of object-oriented programming (OOP)
// that bundles data and methods (functions) that operate on the data within a single unit,
// often called a class. It's about hiding the internal state and requiring all interactions
// to happen through well-defined interfaces.

// JavaScript does not have built-in access modifiers like public, private,
// or protected as in some other OOP languages, but you can achieve encapsulation through
// closures and conventions.

// function createCounter() {
//     let count = 0; // Private variable

//     return {
//       increment() {
//         count++;
//       },
//       decrement() {
//         count--;
//       },
//       getCount() {
//         return count;
//       }
//     };
//   }

//   const counter = createCounter();
//   counter.increment();
//   counter.increment();
//   counter.increment();
//   counter.decrement();
//   console.log(counter.getCount()); // Output: 2

// Prototype

// let myObj = {}
// console.log(myObj)

// let Person1 = {
//     name:'Vinoth',
//     age:32
// }

// console.log(Person1.hasOwnProperty(age))

// function Person(_name, _age){
//     this.name = _name
//     this.age =  _age

// }
// Person.prototype.getNameAndAge = function(){
//     console.log(`I am ${this.name} and my age is ${this.age}`)
// }
// // Person.getNameAndAge()
// let Person1 = new Person('Vinoth', 32)
// console.log(Person1)
// console.log(Person1.getNameAndAge())

// call() Method:
// The call() method is used to invoke a function, explicitly specifying the value
// of this and passing arguments individually.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = { name: 'Vinoth' };
// const person1 = { name: 'Narayanan' };

// greet.call(person, 'Hello');
// greet.call(person1, 'Hello');
// Output: Hello, Vinoth!

// End

// bind() Method:
// The bind() method creates a new function with a specified this value and initial arguments.
// It does not immediately invoke the function but allows you to create
// a new function with preset context and arguments.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = { name: 'Vinoth' };
// const greetPerson = greet.bind(person);

// greetPerson('Hi');
// Output: Hi, Vinoth!

// End

// apply()

// The apply() method in JavaScript is similar to call(), allowing you to invoke a
// function while specifying the value of this. However, it differs in
// how it accepts arguments: apply() takes an array-like object as the second argument,
// allowing you to pass multiple arguments more conveniently.

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = { name: 'Vinoth' };
// const args = ['Hello'];

// greet.apply(person, args);

// End

// setTimeout()
// The setTimeout() function in JavaScript is used to schedule the execution of a
// function or a piece of code after a specified delay. It allows you to run code
// asynchronously after a certain amount of time has passed.

// function greet(){
//   console.log(`setTimeOut - load after 2mins`)
// }
// setTimeout(greet, 3000);

// End

// setInterval()
// The setInterval() function in JavaScript is used to repeatedly execute a
// specified function or code block at specified intervals.

// let counter = 0;

// const intervalId = setInterval(() => {
//   console.log(`Counter: ${counter}`);
//   counter++;

//   if (counter === 5) {
//     clearInterval(intervalId); // Stops the interval after 5 iterations
//   }
// }, 1000); // Executes every 1000 milliseconds (1 second)

// End

// Promises
// Promises in JavaScript are used for handling asynchronous operations.
// They represent a value that may not be available yet but will resolve or reject in the future,
// allowing you to write more readable and manageable asynchronous code.

// Promise States:
// Pending: Initial state, before the promise is fulfilled or rejected.
// Fulfilled: The operation completed successfully, and the promise has a resolved value.
// Rejected: The operation failed, and the promise has a reason for the failure.

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous fetch operation
//     setTimeout(() => {
//       const success = false; // Simulated success
//       if (success) {
//         resolve('Data fetched successfully');
//       } else {
//         reject('Failed to fetch data');
//       }
//     }, 2000); // Simulated delay of 2 seconds
//   });
// };

// fetchData()
//   .then((result) => {
//     console.log(result); // Output: Data fetched successfully
//   })
//   .catch((error) => {
//     console.error(error); // Output: Failed to fetch data
//   });

//   End

// await
// Simulating fetching data from different sources
// function fetchDataFromSource1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data from Source 1");
//     }, 2000);
//   });
// }

// function fetchDataFromSource2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data from Source 2");
//     }, 1500);
//   });
// }

// async function fetchDataFromMultipleSources() {
//   try {
//     const dataFromSource1 = await fetchDataFromSource1();
//     const dataFromSource2 = await fetchDataFromSource2();

//     return { dataFromSource1, dataFromSource2 };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Rethrow the error for handling outside this function
//   }
// }

// // Using fetchDataFromMultipleSources function
// async function processData() {
//   try {
//     const { dataFromSource1, dataFromSource2 } =
//       await fetchDataFromMultipleSources();
//     console.log("Data from Source 1:", dataFromSource1);
//     console.log("Data from Source 2:", dataFromSource2);
//   } catch (error) {
//     console.error("Failed to process data:", error);
//   }
// }

// processData();

// End

// Using ternary operator instead of if-else statement

// let testScore = 50;
// let grade = testScore > 89 ? "A"
// : testScore > 79 ? "B"
// : testScore > 69 ? "C"
// : "D";
// console.log(grade)

// let player = "rock";
// let computer = "scissor";

// let result =
//     player === computer
//     ? "Tie"
//     : player === "rock" &&
//     computer === "paper"
//     ? "computer wins"
//     : player === "paper" &&
//     computer === "scissor"
//     ? "computer wins"
//     : player === "scissor" &&
//     computer === "rock"
//     ? "computer wins"
//     : "player wins"
//     console.log(result)

// End

// alert("My Alert");
// let myBoolean = confirm("My Confimation");
// console.log(myBoolean)
// let myPrompt = prompt("My Prompt");
// console.log(myPrompt)

// Null collasking ??
// ALert, Confirm, Prompt
// let myPrompt = prompt("My Prompt");
// if(myPrompt){
//     console.log(myPrompt ?? `You didn't enter data`) // when u press the cancel button that time msg shown -- ?? -denotes null schema
//     console.log(`Data Type:` + typeof myPrompt) // find the datatype
//     console.log(`length of data:` + myPrompt.trim().length) // find the datatype and trim() is used to remove extra white space after data
// }
// else{
//     console.log(`You didn't enter data`)
// }

// Rock, Paper, Scissors

// let playGame = confirm('Lets play rock, papr, scissors?');
// if(playGame) {
//     let playerChoice = prompt('please enter rock or paper or scissors');
//     if(playerChoice){
//         let playerOne = playerChoice.trim().toLowerCase();
//         if(
//             playerOne === "rock" ||
//             playerOne === "paper" ||
//             playerOne === "scissors"
//         ){
//             let computerChoice = Math.floor(Math.random() * 3 + 1);
//             let computer =
//             computerChoice === 1
//             ? "rock"
//             : computerChoice === 2
//             ? "paper"
//             : "scissors";

//             let result =
//             playerOne === computer
//             ? "Tie game!"
//             : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
//             : playerOne === "paper" && computer === "scisoor"
//             ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
//             : playerOne === "scissor" && computer === "rock"
//             ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
//             : `playerOne: ${playerOne}\n computer: ${computer}\n player wins!`
//             alert(result);
//             let playAgain = confirm("play again");
//             playAgain ? location.reload() : alert ("ok, thanks for playing");

//         }else {
//             alert('you didnt add rock,paper,  scissors')
//         }

//     }
//     else {
//         alert('guess you changed ur mind, maybe next time')
//     }
// }
// else {
//     alert('ok, maybe next time')
// }

// end

//Math function

// let maximum = Math.max(10, 25, 30,52);
// console.log(`maximum value ${maximum}`)

// let minimum = [10, 25, 30,52]
// console.log(`minimum value in ${minimum} => `+  Math.min(...minimum))

// end

// switch

// let day = new Date().getDay();
// let dayName;
// let month = new Date().getMonth();
// let monthName;
// switch (day) {
//   case 0:
//     dayName = "Sunday";
//     break;
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Unknown";
// }
// switch (month) {
//     case 0:
//       monthName = "January";
//       break;
//     case 1:
//         monthName = "February";
//       break;
//     case 2:
//         monthName = "March";
//       break;
//     case 3:
//         monthName = "April";
//       break;
//     case 4:
//         monthName = "May";
//       break;
//     case 5:
//         monthName = "June";
//       break;
//     case 6:
//         monthName = "July";
//       break;
//     case 7:
//         monthName = "July";
//       break;
//     case 8:
//         monthName = "August";
//       break;
//     case 9:
//         monthName = "September";
//       break;
//     case 10:
//         monthName = "October";
//       break;
//     case 11:
//         monthName = "November";
//       break;
//     case 12:
//         monthName = "December";
//       break;
//     default:
//       dayName = "Unknown";
//   }
// console.log(`This  Month is ${monthName} and Today is ${dayName}`);

// end

// while
// let i = 0
// let n = 50;
// while(i<=n){
//     console.log(i) // if you put only console, the app will crash
//     // i= i++; // if you put i++, the iteration wont stop then the app will crash
//     i= i+1; // once its reached to 49 loop will automatically break
// }

//end

// do - while -- alteast one condition should work

// let i = 1;
// let n = 50;
// do {
//   console.log(i);
//   i++;
// } while (i <= n);

//end

//for

// let n = 10;
// for(let i =1; i<=n; i++){
//     console.log(i + ` time`)
// }

// another example

// let names = "vinoth";

// for(let i=0; i<=names.length; i++){
//     console.log(names.charAt(i));
// }
//     console.log(`total characters = ${names.length}`)

// end

// another example

// let numbers = [1, 2, 3, 4, 5, 6];

// for(let i=0; i<=numbers.length; i++){
//     console.log(numbers[i]);
// }
//     console.log(`total characters = ${numbers.length}`)

// end

// another example - removing duplicate

// const numbers = [1, 2, 3, 4, 2, 5, 1];
// const uniqueNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (uniqueNumbers.indexOf(numbers[i]) === -1) {
//     uniqueNumbers.push(numbers[i]);
//   }
// }

// console.log(uniqueNumbers);

// end

// another example -  finding the duplicate

// const numbers = [1, 2, 3, 4, 2, 5, 1];
// const duplicateNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j] && duplicateNumbers.indexOf(numbers[i]) === -1) {
//       duplicateNumbers.push(numbers[i]);
//     }
//   }
// }

// console.log(duplicateNumbers);

// end

// Simplest way using Set method

// const numbers = [1, 2, 3, 4, 2, 5, 1];
// const uniqueNumbers = new Set();
// const duplicateNumbers = [];

// for (const number of numbers) {
//   if (uniqueNumbers.has(number)) {
//     duplicateNumbers.push(number);
//   } else {
//     uniqueNumbers.add(number);
//   }
// }

// console.log(duplicateNumbers);

// end

// spread operator

//  The spread operator (...) in JavaScript is a versatile syntax that allows you to spread
//  elements of an iterable (like an array or a string) into places where multiple elements are
//  expected. It is commonly used for array manipulation, function arguments, and object literals.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// end

// rest operator

// The rest operator (...) in JavaScript is used in function parameters to collect
// all the remaining arguments into a single array. It allows you to work with a
// variable number of arguments without explicitly specifying
// them in the function declaration.

// The rest operator is particularly useful when you want to create functions that can
// accept any number of arguments. It simplifies the syntax and allows you to work
// with an array of parameters.

// Additionally, the rest operator is also used in destructuring and array spreading,
// similar to the spread operator, but in a different context:

// Destructuring
// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // Output: 1
// console.log(rest); // Output: [2, 3, 4, 5]

// // Array Spreading
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// end

// Set

// In JavaScript, a Set is a built-in object that allows you to store unique
// values of any type, whether they are primitive values or object references.
// A Set does not allow duplicate values, so each value in the Set must be unique.

// Creating a Set
// const mySet = new Set();

// // Adding values to the Set
// mySet.add(1);
// mySet.add("Hello");
// mySet.add({ key: "value" });

// // Checking the size of the Set
// console.log(mySet.size); // Output: 3

// // Checking if a value is in the Set
// console.log(mySet.has(1)); // Output: false

// // Removing a value from the Set
// mySet.delete("Hello");

// // Iterating through the Set
// mySet.forEach(value => console.log(value));

// end

// Map

// In JavaScript, a Map is a built-in object that allows you to store key-value pairs,
// where both the keys and values can be of any data type. Unlike an object,
// the keys in a Map can be of any type, including objects,
// and the order of the keys is preserved.

// Creating a Map
// const myMap = new Map();

// // Adding key-value pairs to the Map
// myMap.set("name", "John");
// myMap.set(1, "One");
// myMap.set({ key: "customObject" }, "Value associated with an object");

// // Getting values from the Map
// console.log(myMap.get("name")); // Output: John

// // Checking if a key exists in the Map
// console.log(myMap.has(1)); // Output: false

// // Deleting a key-value pair from the Map
// myMap.delete("name");

// // Iterating through the Map
// myMap.forEach((value, key) => {
//   console.log(key, value);
// });

// end

// .set and .add

// In JavaScript, .set and .add refer to methods associated with two different
// built-in objects: Set and Map.

// Set:
// A Set is a collection of unique values, and it has methods like .add for
// adding elements to the set.

// Example using .add with a Set:

// // Creating a Set
// const mySet = new Set();

// // Adding elements to the Set using .add
// mySet.add(1);
// mySet.add("Hello");
// mySet.add({ key: "value" });

// console.log(mySet); // Output: Set { 1, 'Hello', { key: 'value' } }

// // Creating a Map
// const myMap = new Map();

// // Adding key-value pairs to the Map using .set
// myMap.set("name", "John");
// myMap.set(1, "One");
// myMap.set({ key: "customObject" }, "Value associated with an object");

// console.log(myMap); // Output: Map { 'name' => 'John', 1 => 'One', { key: 'customObject' } => 'Value associated with an object' }

// .add is used with a Set to add individual elements to the set.

// .set is used with a Map to add key-value pairs to the map.

// Both Set and Map are part of the ECMAScript 6 (ES6) standard,
// and they provide convenient ways to work with unique values and key-value pairs in JavaScript.

// memoization
// function memoize(func) {
//     const cache = {};

//     return function (...args) {
//       const key = JSON.stringify(args);

//       if (cache[key]) {
//         console.log('Result retrieved from cache.');
//         return cache[key];
//       }

//       const result = func.apply(this, args);
//       cache[key] = result;
//       console.log('Result calculated and cached.');

//       return result;
//     };
//   }

//   function add(x, y) {
//     console.log('Adding:', x, y);
//     return x + y;
//   }

//   const memoizedAdd = memoize(add);

// console.log(memoizedAdd(3, 5)); // Executes add(3, 5) and caches the result
// console.log(memoizedAdd(3, 5)); // Retrieves the result from the cache

// console.log(memoizedAdd(2, 4)); // Executes add(2, 4) and caches the result
// console.log(memoizedAdd(2, 4)); // Retrieves the result from the cache

// end

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     hobbies: ["reading", "coding", "traveling"],
//   };

//   const jsonString = JSON.stringify(person, null, 2);
//   console.log(jsonString);

// function findUniqueChars(arr) {
//     // Using a Set to store unique characters
//     const uniqueChars = new Set();

//     // Iterate through each string in the array
//     arr.forEach((str) => {
//       // Iterate through each character in the string
//       for (const char of str) {
//         // Add the character to the Set
//         uniqueChars.add(char);
//       }
//     });

//     // Convert the Set to an array and return
//     return Array.from(uniqueChars);
//   }

//   // Example usage
//   const stringArray = ["apple", "banana", "cherry"];
//   const uniqueCharsArray = findUniqueChars(stringArray);

//   console.log(uniqueCharsArray);

// end

// function findUniqueCharsWithCount(arr) {
//     const charCount = {};

//     for (const char of arr) {
//       if (charCount[char]) {
//         charCount[char]++;
//       } else {
//         charCount[char] = 1;
//       }
//     }

//     // Extract unique characters from the keys of charCount
//     const uniqueChars = Object.keys(charCount);

//     // Display unique characters in a separate console
//     console.log('Unique Characters:', uniqueChars.join(', '));

//     // Return an array of objects with character and count
//     return uniqueChars.map((char) => ({ char, count: charCount[char] }));
//   }

//   // Example usage
//   const charArray = ['1', '2', '3', '1', '4', '2'];
//   const uniqueCharsCount = findUniqueCharsWithCount(charArray);

//   console.log(uniqueCharsCount);

// end

// function findUniqueCharsWithCount(arr) {
//     const charCount = {};
//     const nonUniqueChars = [];

//     for (const char of arr) {
//       if (charCount[char]) {
//         charCount[char]++;
//         nonUniqueChars.push(char);
//       } else {
//         charCount[char] = 1;
//       }
//     }

//     // Display non-unique characters in a separate console
//     console.log('Non-Unique Characters:', nonUniqueChars.join(', '));

//     // Extract unique characters from the keys of charCount
//     const uniqueChars = Object.keys(charCount);

//     // Display unique characters in a separate console
//     console.log('Unique Characters:', uniqueChars.join(', '));

//     // Return an array of objects with character and count
//     return uniqueChars.map((char) => ({ char, count: charCount[char] }));
//   }

//   // Example usage
//   const charArray = ['a', 'b', 'c', 'a', 'd', 'b'];
//   const uniqueCharsCount = findUniqueCharsWithCount(charArray);

//   // Display unique characters with counts in the main console
//   console.log(uniqueCharsCount);

// end

// let details = [
//   {'name':'vinoth', status:'p'},
//   {'name':'las', status:'f'},
//   {'name':'narayanan', status:'p'},
//   {'name':'das', status:'f'},
// ];
// const detailsList =  details.filter(res => res.status==='p')
// .map((res)=>res.name)
// // const detailsListName =  details
// // .map((res)=>res.name)
// console.log(detailsList)
// // console.log(details[1].name)

// function outerFunction(outerVariable){
//    return function innerFunction(innerVariable){
//         console.log(`Outer Variable ${outerVariable}`);
//         console.log(`Inner Variable ${innerVariable}`);
//     }
// }

// const newFunction = outerFunction('outside');
// newFunction('inside')

// DOM  Manipulation

// styling Elements

// getElementById()

// const title = document.getElementById('main-heading');
// title.style.fontWeight = 800;
// title.style.color = '#f1f1f1';
// console.log(title);

// getElementByClassName()

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem)

// getElementbyTagName()

// const listItem = document.getElementsByTagName('li');
// console.log(listItem)

// querySelector()

// const container = document.querySelector('.list-items');
// container.style.color = 'blue'
// console.log(container)

// querySelectorAll()
// const container = document.querySelectorAll('.list-items');
// for(i = 0; i<container.length; i++){
//     container[i].style.color = 'blue'
// }
// console.log(container)

// End

// Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding Element

// ul.append(li)

// Modifying Element

// const firstlistItem = document.querySelector('.list-items');

// console.log(firstlistItem.innerText)
// console.log(firstlistItem.textContent)
// console.log(firstlistItem.innerHTML)

// li.innerText = "BABA"

// Modifying Attributes annd classess

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id', 'main-heading');
// let button = document.querySelectorAll("button");
// button.forEach((button) => {
//   button.classList.add("btn");
//   button.style.cursor = "pointer";
//   button.style.marginTop = "20px";
// });
// button.classList.add('btn');
// console.log(button.classList.contains('btn'));

// Remove element
// li.remove()

// Traverse the DOM

// Parent Node Traversal
// const ul = document.querySelector('ul');
// console.log(ul.parentNode)
// console.log(ul.parentElement)

// const html = document.documentElement;
// console.log(html.parentNode)
// console.log(html.parentElement)

// Child node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.background = 'green'

// Sibling node Traversal

// const ul = document.querySelector('ul');
// const h4 = document.querySelector('h4');
// const div =document.querySelector('.movies');

// console.log(div.childNodes)
// console.log(ul.previousElementSibling)
// console.log(h4.nextElementSibling)

// Event Listeners

// event.addEventListener("click", function);

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn(){
//     alert('Hi I am buttun Two!.')
// }

// buttonTwo.addEventListener('click', alertBtn)

// const newBGColor = document.querySelector('.box-3');
// function bgChange(){
//     // let bgchangeColor = document.querySelector('.box-3');
//     // bgchangeColor.style.background = 'green';
//     // newBGColor.style.background = 'green';
//     this.style.background = 'green';
// }
// function nobgChange(){
//     // let bgchangeColor = document.querySelector('.box-3');
//     // bgchangeColor.style.background = 'green';
//     // newBGColor.style.background = 'transparent';
//     this.style.background = 'transparent';
// }
// newBGColor.addEventListener('mouseover', bgChange)
// newBGColor.addEventListener('mouseleave', nobgChange)

// Event Propogation
// 1.Event Capturing
// 2.Target
// 3.Event Bubbling

// window.addEventListener('click', function() {
//     console.log('window');
// }, false);

// document.addEventListener('click', function(){
//     console.log('document');
// }, false);

// document.querySelector('.div2').addEventListener
// ('click', function(e){
//     // e.stopPropagation
//     console.log('Div2');
// }, {once:true});

// document.querySelector('.div1').addEventListener
// ('click', function(){
//     console.log('Div1')
// }, false);

// document.querySelector('button').addEventListener
// ('click', function(e){
//     console.log(e.target)
//     console.log(e.target.innerHTML = 'Clicked')
//     // console.log(e.target.innerHTML)
// }, false)

// Eveent Delegation

// It allows user to append a SINGLE event listener to a parent element that adds it to all of its present and future decendants that match a selector

// document.querySelector('#football').addEventListener('click', (e)=>{
//     console.log(`Football Clicked`)
// const target = e.target;
// if(target.matches('li')){
//     target.style.background = 'lightgreen'
// }
// });

// const sports = document.querySelector('#sports');
// const newSports = document.createElement('li');
// newSports.innerText = 'Rugby';
// newSports.setAttribute('id', 'rugby');
// sports.appendChild(newSports)

// document.querySelector("#sports").addEventListener("click", (e) => {
//   console.log(e.target.getAttribute("id") + " is clicked!.");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.background = "lightgrey";
//   }
// });

// disable   = false;
// return console.log(!disable);
