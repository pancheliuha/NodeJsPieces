const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5b2cfdeff0febc1f6c88308d')
   }, {
       $set: {
           name: 'Victor'
       },
       $inc: {
           age: 1
       }
   }, {
       returnOriginal: false
   }).then(result => {
       console.log(result);
   })


    // client.close();
});