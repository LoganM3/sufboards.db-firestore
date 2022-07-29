import { dbConnect } from "./dbconnect.js";

export function getBoards(req,res){
    const db = dbConnect()
 db.collection('surfboards').get()
 .Then(collection => {
    const surfboards= collection.docs.map(docs => docs.data())
    res.send(surfboards)
 })
 .catch(handleError(err, res))
}


function handleError(err,res){
    console.error(err)
    res.status(500).send(err)
}
