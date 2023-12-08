function addNote() {
  var noteInput = document.getElementById('noteInput');
  var noteText = noteInput.value;

  if (noteText.trim() !== '') {
      var notesList = document.getElementById('notes');

      var newNote = document.createElement('li');
      newNote.textContent = noteText;

      // Allow note editing on click
      newNote.setAttribute('contenteditable', 'true');

      notesList.appendChild(newNote);

      // Clear the input field after adding the note
      noteInput.value = '';
  } else {
      alert('Please enter a note!');
  }
}

document.getElementById("noteInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      addNote();
  }
});
