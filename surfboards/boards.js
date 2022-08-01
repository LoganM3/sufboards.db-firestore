import { dbConnect } from "./dbconnect.js";

export function getBoards(req,res){
    const db = dbConnect()
 db.collection('surfboards').get()
 .then(collection => {
    const surfboards= collection.docs.map(docs => docs.data())
    res.send(surfboards)
 })
 .catch(err => handleError(err, res))
}

export function addBoard(req,res){
    const db = dbConnect()
    const newBoard = req.body
    db.collection('surfboards').add(newBoard)
    .then(collection =>{
        res.status(200).send({
            success: true,
            id: doc.id
        })
        
    } )
    .catch(err => handleError(err,res))

}


function handleError(err,res){
    console.error(err)
    res.status(500).send(err)
}
