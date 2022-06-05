const NotesModel = require('./notesModel');

describe('NotesModel', () => {
 
  beforeEach(() => {
    model = new NotesModel();
  });

  describe('getNotes', () => {
    it('returns an empty array at first', () => {
      expect(model.getNotes()).toEqual([]);
    });
  })
  
  describe('addNote', () => {
    it('adds a note to the model', () => {
      model.addNote('Buy milk');
      expect(model.getNotes()).toEqual(['Buy milk']);
    });
    it('adds another note', () => {
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });
  })
  
  describe('reset', () => {
    it('empties the list', () => {
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      model.reset();
      expect(model.getNotes()).toEqual([]);
    });
  })
})
