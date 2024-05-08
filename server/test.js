const Repository_MongoDb = require('./repository_mongodb')
const ObjectId = require('mongodb').ObjectId
const db = new Repository_MongoDb

const data = {
    _id: '663b7029113e9905f0222071',
    nombre: 'Juan',
    edad: '22',
    ciudad: 'Cordoba'
}


db.Update(data)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.error(err)
    })

// db.DeleteById(0)
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.error(err)
//     })
