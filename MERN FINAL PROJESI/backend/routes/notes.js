const express = require('express')
const {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    deleteNotes,
    updateNote
}= require('../controllers/noteController')


const router = express.Router()
//GET all NOTES
router.get('/', getNotes)
//GET a single NOTE
router.get('/:id', getNote)
//POST a new NOTE
router.post('/', createNote)
//DELETE a NOTE
router.delete('/:id',deleteNote)
//DELETE all NOTES
router.delete('/', deleteNotes)
//UPDATE a NOTE
router.patch('/:id', updateNote)
module.exports = router