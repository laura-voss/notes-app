class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotesFromApi() {
    this.api.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

  displayNotes() {
    // remove all previous notes
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";

      document.querySelector('#add-note-input').value = '';
      this.mainContainerEl.append(noteEl);
    });
  };
}

module.exports = NotesView;
