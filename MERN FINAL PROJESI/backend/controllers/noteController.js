const Note = require('../models/NoteModel')
const mongoose = require('mongoose')

//get all notes
const getNotes = async(req,res) => {
    const notes = await Note.find({}).sort({createdAt: -1})

    res.status(200).json(notes)
}

//get a single note
const getNote = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such note'})
    }
    
    const note = await Note.findById({_id: id})

    if (!note){
        return res.status(404).json({error: 'no such note'})
    }

    res.status(200).json(note)
}

//create a new note
const createNote = async (req,res) =>{
    const {title, content, color} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!content){
        emptyFields.push('content')
    }
    if(emptyFields.length > 0){
        return res.status(404).json({error: 'Please fill in all the fields', emptyFields})
    }
    //add doc to db
    try{
        const note = await Note.create({title, content, color})
        res.status(200).json(note)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such note'})
    }

    const note = await Note.findOneAndDelete({_id: id})

    if (!note){
        return res.status(404).json({error: 'no such note'})
    }
    
    res.status(200).json(note)
}
//delete all notes
const deleteNotes = async (req, res) => {
    try {
        await Note.deleteMany({});
        res.status(200).json({ message: 'All notes have been deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// update a note
const updateNote = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such note'})
    }
    const note = await Note.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!note){
        return res.status(404).json({error: 'no such note'})
    }
    
    res.status(200).json(note)
}


module.exports = {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    deleteNotes,
    updateNote
  }