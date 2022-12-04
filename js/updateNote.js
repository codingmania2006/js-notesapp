import getNotes from "./getNotes.js";

const updateNote = () => {
    let notes = localStorage.getItem('pwl-notesapp');
    let notesObj = [];
    if (notes != null) {
        notesObj = JSON.parse(notes);
        let id = document.getElementById("idEdit").value;
        let title = document.getElementById("titleEdit").value;
        let desc = document.getElementById("descEdit").value;

        if (document.getElementById("titleEdit").value == "" || document.getElementById("descEdit").value == "") {
            window.alert("Please fill up all the fields!");
        } else {
            let noteIndex = notesObj.findIndex(el => {
                return el.id === id;
            });
            let note = notesObj.filter(el => {
                return el.id === id;
            })[0];

            notesObj[noteIndex].title = title ? title : note.title
            notesObj[noteIndex].description = desc ? desc : note.description

            localStorage.setItem('pwl-notesapp', JSON.stringify(notesObj));
            document.getElementById("idEdit").value = "";
            document.getElementById("titleEdit").value = "";
            document.getElementById("descEdit").value = "";
            $('#editModal').modal('hide');
            getNotes();
        }
    };
}

export default updateNote;