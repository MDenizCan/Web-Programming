import React from 'react';
import { useNotesContext } from "../hooks/useNotesContext";

const NoteDetails = ({ note }) => {
  const {dispatch} = useNotesContext()

  const handleClick = async () => {
    const response = await fetch ('/api/notes/' + note._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_NOTE', payload: json})
      console.log('note deleted', json)
    } 
  }

    return (
      <div className="note-details" style={{ backgroundColor: note.color }}>
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <p>{new Date(note.createdAt).toLocaleString()}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
      </div>
    );
  };
  
  export default NoteDetails;
  