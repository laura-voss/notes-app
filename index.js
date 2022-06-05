
const NotesApi = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// Setup the model with one note
const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model,api);

api.loadNotes((notes) => {
 
  model.setNotes(notes);
  view.displayNotes();
});
