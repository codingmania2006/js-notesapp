import getNotes from "./getNotes.js";

const deleteNote = (id) => {
    let notes = localStorage.getItem('pwl-notesapp');
    let notesObj = [];
    if (notes != null) {
        notesObj = JSON.parse(notes);

        let noteIndex = notesObj.findIndex(el => {
            return el.id === id;
        });

        notesObj.splice(noteIndex, 1);
        
        localStorage.setItem('pwl-notesapp', JSON.stringify(notesObj));
        getNotes();
    };
}

export default deleteNote;