const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

let con;

// const uri = "mongodb+srv://<username>:<password>@cluster0.tzzxk.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


module.exports = {
  connect: function (callback) {
    console.log('Handsome in the morning !!!');
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      con = db.db('nftmarketflowdb');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });

    // client.connect(err => {
    //   con = client.db("nftmarketflowdb");
    //   return callback();
    // });


  },

  getConnection: function () {
    return con;
  },

  getCollection: function (collectionName) {
    return con.collection(collectionName);
  },
};
