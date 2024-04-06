import { useState } from "react";
import React from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, //turns name key from string to actual value of name const
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note); //passing new note back to App.jsx
    setNote({
      //clear the note typing area
      title: "",
      content: "",
    });
    event.preventDefault(); //prevents from refesh
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
//default behavior of button inside a form is to refresh the page.

export default CreateArea;
