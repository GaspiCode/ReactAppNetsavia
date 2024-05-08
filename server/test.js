const Repository_MongoDb = require('./repository_mongodb')
const db = new Repository_MongoDb

const data = {
    nombre: "Martin",
    edad: 25,
    ciudad: "Sevilla",
    id: 1
}


db.assingId()
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
