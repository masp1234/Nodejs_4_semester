import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv/config'
// One connection is fine for the amount of users we expect. Even for 1000 concurrent users 1 connection is fine


// the thing before :// is the protocol. could also use 127.0.0.1:27017 instead of  localhost:27017
const URL = `mongodb+srv://nodeexpressprojects.tapw1jn.mongodb.net/myFirstDatabase" --apiVersion 1 --username <username>`

const client = new MongoClient(URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,

    }
})

const db = client.db("candy")

const shops = db.collection("shops")



// exporting the collections, so you can say db.<collection_name> from another file to access that collection
export default {
    shops: db.collection("shops"),
    CandyTypes: db.collection("candy_types")
}