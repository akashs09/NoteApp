const fs = require('fs');

let fetchNotes= () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    debugger;

    return JSON.parse(notesString)
  } catch(e) {
    return[];
  }
};

let saveNotes=(notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title, body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
    // if no note exists will return undefined
  }
  else {
    console.log("note already added");
  }

};

var getAll = () => {
  return fetchNotes();
  console.log('Getting all notes');
};

var getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) =>  note.title === title);
  return filteredNotes[0];
};
var removeNote = (title) => {
  let notes = fetchNotes();
  if (notes.length === 0) {
    console.log(`Nothing to remove`);
  };
  console.log(`fetched notes is of length ${notes.length}`);
  let filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

let checkLength=() => {
  let notes = fetchNotes();
  console.log(notes.length);
};
let logNote = (note) => {
  debugger;
  console.log(`-------------`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
// function checkLength() {
//   let notes = fetchNotes();
//   console.log(notes.length);
// }

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  checkLength,
  logNote
};
