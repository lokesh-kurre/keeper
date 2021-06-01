import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import sampleNotes from "../notes";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes, updateNotes] = useState(sampleNotes);

  function addNotes(note) {
    updateNotes([...notes, note]);
  }

  function deleteNotes(id) {
    updateNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
