// Object destructuring

// const person = {
//   //   name: "Giang",
//   age: 29,
//   location: {
//     city: "Hanoi",
//     temp: 29,
//   },
// };

// const { name = "Anonymous", age } = person;
// const { city, temp } = person.location;

// if ((city, temp)) {
//   console.log(`it's ${city} is ${temp}`);
// }

// console.log(`${name} is ${age}`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-publisher" } = book.publisher;
// console.log(publisherName);

// Array destructuring

const address = ["1299 hanoi", "Nam dinh", "saigon", "12123"];

const [street, city, state, zip] = address;

console.log(`you are in${address[1]}`);
