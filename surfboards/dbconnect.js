import { initializeApp,cert } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore"
import { getHeapSpaceStatistics } from "v8";
import {credentials} from "./credentials.js"



export function dbConnet(){
    if(!getApps().length()){
        initializeApp({
        credential: cert(credentials)
        })
    }
    return getFirestore()
}