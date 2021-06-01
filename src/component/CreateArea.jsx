import React, { useState } from "react";

function CreateArea(props) {
  const [note, updateNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    updateNote({ ...note, [name]: value });
  }

  function submitNote(event) {
    const newNote = { ...note };
    updateNote({
      title: "",
      content: "",
    });
    props.addNote(newNote);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
