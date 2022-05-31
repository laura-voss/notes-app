/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    
    model = new NotesModel();
    view = new NotesView(model);
  });
 
  it('gets a list of notes from the model', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
 
});
