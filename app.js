const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
      .command('add', 'Add a new note',{
      title: titleOptions,
      body: bodyOptions,
      })
    .command('list', 'List all notes')
    .command('read', 'Read a note',{
    title: titleOptions,
      })
    .command('remove', 'Remove a note', {
      title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note != undefined) {
    console.log('note was created');
    notes.logNote(note)
  }
  else {
    console.log("note title taken!");
  }
} else if (command === 'list') {
  let allNotes  = notes.getAll();
  console.log(typeof allNotes);
  console.log(`Printing ${allNotes.length} note(s):`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note !== undefined) {
    console.log(`Note found`);
    notes.logNote(argv.title);
  } else {
    console.log(`Note not found`);
  }
} else if (command === 'remove') {
  let wasNoteRemoved = notes.removeNote(argv.title);
  let output = wasNoteRemoved ? 'Note was removed' : 'Note was not removed';
  console.log(output);
}
  else if (command ==='length') {
  notes.checkLength();

}
 else {
  console.log('Command not recognized');
}
