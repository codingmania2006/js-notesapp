import genId from "./genId.js";
import getNotes from "./getNotes.js";

const addNote = () => {
    let notes = localStorage.getItem('pwl-notesapp');
    let notesObj = [];
    if (notes != null) {
        notesObj = JSON.parse(notes);
        let title = document.getElementById("title").value;
        let desc = document.getElementById("desc").value;
        let noteId = genId();
        let timestamp = new Date().toLocaleString();

        if (document.getElementById("title").value == "" || document.getElementById("desc").value == "") {
            window.alert("Please fill up all the fields!");
        } else {
            const formData = {
                title: title,
                description: desc,
                id: noteId,
                timestamp: timestamp
            };
            notesObj.push(formData);
            localStorage.setItem('pwl-notesapp', JSON.stringify(notesObj));
            document.getElementById("title").value = "";
            document.getElementById("desc").value = "";
            getNotes();
        }
    } else {
        notesObj = [];
        let title = document.getElementById("title").value;
        let desc = document.getElementById("desc").value;
        let noteId = genId();
        let timestamp = new Date().toLocaleString();

        if (document.getElementById("title").value == "" || document.getElementById("desc").value == "") {
            window.alert("Please fill up all the fields!");
        } else {
            const formData = {
                title: title,
                description: desc,
                id: noteId,
                timestamp: timestamp
            };
            notesObj.push(formData);
            localStorage.setItem('pwl-notesapp', JSON.stringify(notesObj));
            document.getElementById("title").value = "";
            document.getElementById("desc").value = "";
            getNotes();
        }
    }
}

export default addNote;
