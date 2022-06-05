/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
    
    it('adds a new note', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const model = new NotesModel();
      const view = new NotesView(model);

      // 1 fill the input
      const input = document.querySelector('#add-note-input');
      input.value = 'My new amazing test note';

      // 2 click the button
      const button = document.querySelector('#add-note-btn');
      button.click();

      // 3 note should be on the page
      expect(document.querySelectorAll('div.note').length).toEqual(1);
      expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
    });

    it('gets a list of notes from the model', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      // setting up a model and a view
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote('Buy milk');
      model.addNote('Go to the gym');

      // display the notes on the page
      view.displayNotes();

      // there should now be 2 div.not on the page
      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });

    it('should clear the list of previous notes before displaying', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote('Buy milk');
      model.addNote('Go to the gym');

      view.displayNotes();
      view.displayNotes();

      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});
