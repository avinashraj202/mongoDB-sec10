const { ObjectID } = require('bson')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'test'
// const { MongoClient, ObjectID } = require('mongodb')
const id = new ObjectID()
console.log(id) // Print new id to the console 
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('connected to DB!')

        const { MongoClient, ObjectID } = require('mongodb')
        const id = new ObjectID()
        console.log(id)
    }

    const db = client.db(databaseName)
    //  db.collection('testcol').insertOne({
    //      firstname: 'devanshu',
    //      lastname: 'Kumar',
    //      age: 29
    //  });

    db.collection('testcol').insertMany([
        {
            firstname: 'Manish',
            lastname: 'kumar',
            age: 23
        }, {
            firstname: 'Ashish',
            lastname: 'Ranjan',
            age: 26
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }
        console.log(result.ops)
    })
    db.collection('testcol').findOne({
        _id: new
            ObjectID("62203b0a2ea857fa33197386")
    }, (error, task) => {
        console.log(task)
    })
    db.collection('testcol').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
    db.collection('testcol').findOne({
        _id: new
            ObjectID("62205ec5425e87073b903ac1")
    }, (error, task) => {
        console.log(task)
    })
    db.collection('testcol').updateOne({
        _id: new ObjectID("621fa65ac0931391fda79699")
    }, {
        $inc: {
            age: 3
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    const doWorkPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([7, 4, 1])
            // reject('Things went wrong!')
        }, 6000)
    })
    doWorkPromise.then((result) => {
        console.log('Success!', result)
    }).catch((error) => {
        console.log('Error!', error)
    })
    db.collection('testcol').updateMany({
        firstname:'Ashish'
        }, {
        $set: {
        age: 40       
}
        },(error,result)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
            }
        })
db.collection('testcol').deleteMany({
    lastname:'raj'
   }).then((result) => {
    console.log(result)
   }).catch((error) => {
    console.log(error)
   })
   db.collection('testcol').deleteOne({
    firstname:'devanshu'
   }).then((result) => {
    console.log(result)
   }).catch((error) => {
    console.log(error)
   })
})