const fs = require('fs');

class repository {
    Create = async (newRegister) => {
        try {
            //Leer database y guardarla en un array (basico e ineficiente, pero para la demo sirve)
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error (Repository.Create): al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                })
            })
            const bdArray = JSON.parse(data)

            if (bdArray.length !== 0) {
                //Buscar id disponible
                let flag = true, id = 0, k = 0
                while (flag) {
                    if (!bdArray[k + 1])
                        flag = false
                    if (bdArray[k].id === id)
                        id++
                    k++
                }
                newRegister.id = id
            } else {
                newRegister.id = 0
            }



            //Pushear al array
            bdArray.push(newRegister)

            // Ordenar el array, tiene que estar ordenado para que el algoritmo de ids funcione
            bdArray.sort((a, b) => {
                return a.id - b.id
            })

            //Guardar el array en database
            const newbdJSON = JSON.stringify(bdArray, null, 2)
            await new Promise((resolve, reject) => {
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error (Repository.Create): al escribir en el archivo:', err)
                        reject()
                    }
                    resolve()
                })
            })
            return true
        }
        catch (err) {
            console.error('Error (Repository.Create): ', err);
            return false
        }
    }
    DeleteById = async (body) => {
        const id = body.id

        try {
            //Leer database y guardarla en un array
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error (Repository.DeleteById): al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                })
            })
            const bdArray = JSON.parse(data)

            //Ver si existe el elemento con la id proporcionada, por las dudas
            if (!bdArray.find(item => item.id === id)) {
                console.error("Error (Repository.DeleteById): no se ha encontrado el elemento con la id proporcionada")
                return false
            }

            //Filtrar el array, el que tenga la id suministrada se queda afuera
            const newBdArray = bdArray.filter(item => item.id !== id)

            // Ordenar el array de vuelta por las dudas
            bdArray.sort((a, b) => {
                return a.id - b.id
            })

            //Guardar de vuelta el array en database
            const newbdJSON = JSON.stringify(newBdArray, null, 2)
            await new Promise((resolve, reject) => {
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error (Repository.DeleteById): al escribir en el archivo:', err)
                        reject()
                    }
                })
                resolve()
            })
            return true
        }
        catch (err) {
            console.error('Error (Repository.DeleteById):', err);
            return false
        }
    }
    ReadAll = async () => {
        try {
            //Leer database y guardarla en array
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.log('Error (Repository.ReadAll): al leer el archivo:', err)
                        reject()
                    }
                    const bdArray = JSON.parse(data)
                    resolve(bdArray)
                })
            })
            //Devolver directamente el array con toda la database adentro
            if (data) {
                return data
            } else {
                console.log('Error (Repository.ReadAll): No se encontro ningun dato');
                return false;
            }

        }
        catch (err) {
            console.log('Error (Repository.ReadAll)', err)
            return false
        }
    }
    ReadById = async (id) => {
        try {
            //Leer database y guardarla en array
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                })
            })
            const bdArray = JSON.parse(data)
            //Encontrar item con similar id y guardarlo
            const item = bdArray.find(item => item.id === id)

            //Devolver item con id igual a la suministrada
            if (item) {
                return item
            } else {
                console.log('Error (Repository.ReadById): No se encontró ningún elemento con el ID especificado.');
                return false;
            }
        }
        catch (err) {
            console.log('Error (Repository.ReadById): ', err)
            return false
        }
    }
    Update = async (body) => {
        try {
            //Leer database y guardarla en un array
            const data = await new Promise((resolve, reject) => {
                fs.readFile('bd.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error (Repository.Update): al leer el archivo:', err)
                        reject()
                    }
                    resolve(data)
                })
            })
            const bdArray = JSON.parse(data)

            //Ver si existe el elemento con la id proporcionada, por las dudas
            if (!bdArray.find(item => item.id === body.id)) {
                console.error("Error (Repository.DeleteById): no se ha encontrado el elemento con la id proporcionada")
                return false
            }

            //Aislar item con id igual a la suministrada
            const item = bdArray.find(item => item.id === body.id)

            //Filtrarlo
            const newBdArray = bdArray.filter(item => item.id !== body.id)

            //Sustituir los valores
            item.nombre = body.nombre
            item.edad = body.edad
            item.ciudad = body.ciudad

            //Pushear al array
            newBdArray.push(item)

            // Ordenar el array
            newBdArray.sort((a, b) => {
                return a.id - b.id
            })

            //Guardar el array entero con el item modificado de vuelta
            const newbdJSON = JSON.stringify(newBdArray, null, 2)
            await new Promise((resolve, reject) => {
                fs.writeFile('bd.json', newbdJSON, 'utf8', (err) => {
                    if (err) {
                        console.error('Error (Repository.Update): al escribir en el archivo:', err)
                        reject()
                    }
                })
                resolve()
            })

            return true
        }
        catch (err) {
            console.log('Error (Repository.Update):', err)
            return false
        }
    }
}

module.exports = repository


