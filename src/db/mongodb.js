// CRUD create read update delete

//get mongodb node driver
const { MongoClient, ObjectID } = require('mongodb');

// setup mongodb location and mongodb database wich are goin to use
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


// Make connection to mongodb
MongoClient.connect(connectionURL, { useUnifiedTopology: true, }, (error, client) => {

    if (error) {
        return console.log(error);
    }

    // get database client by its name

    const db = client.db(databaseName);


    // // CREATIONS C on CRUD ----------------------------------------------------------

    // db.collection('users').insertOne({
    //     name: 'Pepe',
    //     age: 44
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Kiwi',
    //         age: 29
    //     },
    //     {
    //         name: 'Shila',
    //         age: 10
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany(
    //     [
    //         { description: 'Correr', completed: true },
    //         { description: 'Saltar', completed: false },
    //         { description: 'Dormir', completed: false }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log(error);
    //         }

    //         console.log(result.ops);
    //     })

    // // C END --------------------------------------------------------------

    // // READINGS R on CRUD -----------------------------------------------------------

    // db.collection('users').findOne({ _id: new ObjectID("5eae53f876ccd77bda3d2a02"), name: 'Alberto', age: 33 }, (error, user) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ name: 'Alberto' }).toArray((error, users) => {
    //     if (error) {
    //         console.log(error);
    //     }

    //     console.log(users);
    // })
    // db.collection('users').find({ name: 'Alberto' }).count((error, count) => {
    //     if (error) {
    //         console.log(error);
    //     }

    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5eae621d20fe6106f84bb564") }, (error, task) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(tasks);
    // })

    // // R END -----------------------------------------------------------------

    // // UPDATES U ON CRUD ------------------------------------------------------------

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("5eae53f876ccd77bda3d2a02")
    //     },
    //     {
    //         $set: {
    //             name: 'Mike'
    //         }
    //     })
    //     .then(result => console.log(result.modifiedCount))
    //     .catch(error => console.log(error));

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("5eae53f876ccd77bda3d2a02")
    //     },
    //     {
    //         $inc: { age: 1 }
    //     })
    //     .then(result => console.log(result.modifiedCount))
    //     .catch(error => console.log(error));

    // db.collection('tasks').updateMany(
    //     {
    //         completed: false
    //     },
    //     {
    //         $set: { completed: true }
    //     })
    //     .then(result => console.log(result.modifiedCount))
    //     .catch(error => console.log(error))

    // // U END ------------------------------------------------------------------

    // // DELETIONS D ON CRUD ----------------------------------------------------------

    // db.collection('users')
    //     .deleteOne(
    //         {
    //             _id: new ObjectID("5eae53f876ccd77bda3d2a02")
    //         }
    //     )
    //     .then(result => console.log(result.deletedCount))
    //     .catch(error => console.log(error));


    // db.collection('users')
    //     .deleteMany(
    //         {
    //             age: 29
    //         })
    //     .then(result => console.log(result.deletedCount))
    //     .catch(error => console.log(error));

    // // D END ----------------------------------------------------------------
});