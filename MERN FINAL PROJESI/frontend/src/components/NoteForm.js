import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";

const NoteForm = () => {
  const {dispatch} = useNotesContext()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([])

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F7FF33', '#FF33A8', '#33FFF2'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, content, color };

    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null);
      setTitle('');
      setContent('');
      setColor('');
      setEmptyFields([])
      console.log('New note added', json);
      dispatch({type: 'CREATE_NOTE', payload: json})
    }
  };


  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Sticky Note</h3>

      <label>Note Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />
      <label>Content</label>
      <input 
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes('content') ? 'error' : ''}
      />
      <label>Color</label>
      <div className="color-picker">
        {colors.map((c) => (
          <button
            key={c}
            className={`color-button ${color === c ? 'selected' : ''}`}
            style={{ backgroundColor: c }}
            onClick={(e) => {
              e.preventDefault();
              setColor(c);
            }}
          />
        ))}
      </div>

      <button type="submit">Add Note</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NoteForm;
