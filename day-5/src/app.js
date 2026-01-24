const express = require('express')

const app = express()

app.use(express.json()) // MiddleWare
let notes = [] // Notes Storage

// Create Note
app.post('/',(req,res)=>{
    notes.push(req.body)
    res.send('note created')
})

// Read Note
app.get('/',(req,res)=>{
    res.send(notes)
})

// Delete Note
app.delete('/:index',(req,res)=>{
    delete notes[req.params.index]
    res.send('note deleted')
})

// Update Note
app.put('/:index',(req,res)=>{
    notes[req.params.index] = req.body
    res.send('note updated')
})

// Update Description
app.put('/:index',(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send('description updated')
})

// Update Title
app.put('/:index',(req,res)=>{
    notes[req.params.index].title = req.body.title
    res.send('title updated')
})

module.exports = app