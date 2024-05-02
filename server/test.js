const  Repository  = require('./repository.js');

const repository = new Repository

// const data = {
//     id: 1,
//     nombre: "Mateo",
//     edad: 32,
//     ciudad: "Barcelona"
// }


// repository.Update(2,'nombre','juan')
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.error(err)
//     })


const response = await fetch('/data',{method: 'GET'})
console.log(response)