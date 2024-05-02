const  Repository  = require('./repository.js');

const repository = new Repository

const data = {
    id: 1,
    nombre: "Mateo",
    edad: 32,
    ciudad: "Barcelona"
}


repository.Create(data)
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.error(err)
    })
