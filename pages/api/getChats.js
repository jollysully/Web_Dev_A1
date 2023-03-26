import { MongoClient } from "mongodb";

export default function getchats(req, res) {
  // Replace the uri string with your MongoDB deployment's connection string.
  const uri = "mongodb://root:example@0.0.0.0:6666";

  // create mongo connection client
  const client = new MongoClient(uri);

  async function run() {
    try {
      const database = client.db("courses");
      const movies = database.collection("chats");

      const query = { };
      const options = {

      };

      const cursor = movies.find(query, options);

      let buffer = '';

      cursor.forEach(element => {
        console.log(element);
        buffer = buffer + element;

        res.status(200).json(element);
    });


    
      

    } finally {
      //await client.close();
    }
  }

  run().catch(console.dir);
}
    


//mongodb://root:example@localhost:6666/