const fs = require('fs');
const { MongoClient } = require("mongodb");
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://onursefik:1596321abc@mongoproject.uqp9h.mongodb.net/nodejsProject?retryWrites=true&w=majority";
const client = new MongoClient(url);
const util = require('util')


 // The database to use
 const dbName = "nodejsProject";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("pieces");
         
      

         let rawdata = fs.readFileSync('guitar.json');
         let personDocument = JSON.parse(rawdata);

         // Construct a document                                                                                                                                                              
     

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(personDocument);
         // Find one document
         // Print to the console

         console.log(util.inspect(p, { maxArrayLength: null }))

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {

        await client.close();
    }
}

run().catch(console.dir);
