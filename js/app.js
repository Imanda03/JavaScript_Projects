console.log('Welcome to note apps');
showNotes();
// If user add note, add to it local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt = "";
    console.log(notesObj);
    showNotes();
})

// function to show from local srorage!!
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>`;

    });
    let notesElm = document.getElementById("notes");
    if (notesObj != 0) {
        notesElm.innerHTML = html;
    } else
        notesElm.innerHTML = `Nothing to show. Please add some notes`
}

// fuction to delete the node
function deleteNotes(index) {
    console.group("i am delecting.", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}