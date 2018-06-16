// let obj = {
//   name: "Akash"
// };
// console.log("The obj before stringify() is called is", typeof(obj));
// console.log(obj);
// let stringObj = JSON.stringify(obj);
// console.log("The obj after stringify() is called is", typeof(stringObj));
// console.log(stringObj);

// let personString = '{"name": "Andrew", "age": 28}';
// console.log("personString:", typeof(personString));
// let person = JSON.parse(personString);
// console.log("person: ", typeof(person));

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};
fs.writeFileSync('notes.json',JSON.stringify(originalNote));
console.log(typeof JSON.stringify(originalNote));

let noteString = fs.readFileSync('notes.json');
// console.log(typeof noteString);
let note = JSON.parse(noteString);
//
// console.log(typeof note);
// console.log(note.title);

originalNote = JSON.stringify(originalNote);
console.log(typeof originalNote);
