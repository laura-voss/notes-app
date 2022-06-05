const NotesApi = require('./notesApi');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('notesAPI class', () => {
  it('calls fetch and loads data', (done) => {
    // done keyword for jest -> testing callback
    // wont let test pass until
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123,
    })
  );

    api.loadNotes((displayNotesFromApi) => {
      expect(displayNotesFromApi.name).toEqual("Some value");
      expect(displayNotesFromApi.id).toEqual(123);
      done();
    });
  });
});