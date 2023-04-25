// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017";

// const db = MongoClient.connect(
//   url,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) {
//       return console.log(err);
//     }

//     // Specify the database you want to access
//     var query = {};
//     var dbo = client.db("stock");
//     dbo
//       .collection("ejemplar")
//       .find(query)
//       .toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         client.close();
//       });

//     console.log(`MongoDB Connected: ${url}`);
//   }
// );

// module.exports = db;
