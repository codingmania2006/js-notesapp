import deleteNote from './deleteNote.js';

const getNotes = () => {
    let notes = localStorage.getItem('pwl-notesapp');
    let notesObj = [];
    if (notes != null) {
        notesObj = JSON.parse(notes);
        let output = notesObj.map((note, index) => {
            return `<tr>
                <td>${index+1}</td>
                <td>${note.title}</td>
                <td>${note.description}</td>
                <td>${note.timestamp}</td>
                <td>
                    <button class="edit btn btn-sm btn-success" id="${note.id}">Edit</button>
                    <button class="delete btn btn-sm btn-danger" id="${note.id}">Delete</button>
                </td>
            </tr>`;
        }).join("");
        document.getElementById("tbody").innerHTML = output;

        let edits = document.getElementsByClassName('edit');
        Array.from(edits).forEach(element => {
            element.addEventListener('click', e => {
                let btnId = e.target.id;
                $('#editModal').modal('show');
                let note = notesObj.filter(el => {
                    return el.id === btnId;
                })[0];
                document.getElementById("titleEdit").value = note.title;
                document.getElementById("descEdit").value = note.description;
                document.getElementById("idEdit").value = e.target.id;
            })
        })

        let deletes = document.getElementsByClassName('delete');
        Array.from(deletes).forEach(element => {
            element.addEventListener('click', e => {
                let btnId = e.target.id;
                if (window.confirm("Are you sure, you want to delete this note ?")) {
                    deleteNote(btnId);
                }
            })
        })
    };
}

export default getNotes;