import express from 'express'
import { addBoard, getBoards } from './surfboards/boards.js'
// import {get,add,update}

const port = 3005
const app = express()
app.use(express.json())

app.get('/surfboards', getBoards )
app.post('/surfboards/new', addBoard)


app.listen(port,()=>{
    console.log('is working')
} )