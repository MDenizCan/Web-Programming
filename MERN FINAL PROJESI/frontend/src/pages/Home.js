import { useEffect } from "react"
import { useNotesContext } from '../hooks/useNotesContext'

//components
import NoteDetails from '../components/NoteDetails'
import NoteForm from "../components/NoteForm"

const Home = () => {
  const {notes, dispatch} = useNotesContext()

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('/api/notes')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_NOTES', payload: json})
            }
            else {
              throw new Error(json.message); 
          }
        }
 
        fetchNotes()
    }, [dispatch])

    return(
        <div className="home">
          <div className="notes-container">
          { notes && notes.map(note => (
                    <NoteDetails note={note} key={note._id}/> 
                ))}
          </div>
          <div>
            <NoteForm />
          </div>
        </div>
      );
    };
    export default Home;