import addNote from "./js/addNote.js";
import getNotes from './js/getNotes.js';
import updateNote from './js/updateNote.js';

document.getElementById("addBtn").addEventListener("click", () => addNote());
document.getElementById("updateBtn").addEventListener("click", () => updateNote());
getNotes();
