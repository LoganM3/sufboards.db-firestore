import express from 'express'
import { getBoards } from './surfboards/boards'
// import {get,add,update}

const port = 3005
const app = express()
app.use(express.json())

app.get('/surfboards', getBoards )


app.listen(port,()=>{
    console.log('is working')
} )