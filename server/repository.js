const fs = require('fs');

class repository {
    Create = async (newRegister) => {
        try {
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
            bdArray.push(newRegister)
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
            console.error('Error (Repository.Create): ',err);
            return false
        }
    }


    DeleteById = async (id) => {
        try {
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
            const newBdArray = bdArray.filter(item => item.id !== id)
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
        catch(err) {
            console.error('Error (Repository.DeleteById):',err);
            return false
        }
    }

    ReadAll = async () => {
        try {
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
            if (data) {
                return data
            } else {
                console.log('Error (Repository.ReadAll): No se encontro ningun dato');
                return false;
            }
            
        }
        catch(err) {
            console.log('Error (Repository.ReadAll)',err)
            return false
        }
    }

    ReadById = async (id) => {
        try {
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
            const item = bdArray.find(item => item.id === id)

            if (item) {
                return item
            } else {
                console.log('Error (Repository.ReadById): No se encontró ningún elemento con el ID especificado.');
                return false;
            }
        }
        catch(err) {
            console.log('Error (Repository.ReadById): ',err)
            return false
        }
    }

    Update = async (id,field,value) => {
        try{
            if(field === 'id'){
                console.error('Error (Repository.Update): No se puede cambiar una id')
                return false
            }
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
            const item = bdArray.find(item => item.id === id)
            const newBdArray = bdArray.filter(item => item.id !== id)

            if (item) {
                if(field in item){
                    item[field] = value;
                    newBdArray.push(item)
                }
                else{
                    console.log('Error (Repository.Update): No se encontro ningun campo con el nombre proporcionado');
                return false;
                }    
            } else {
                console.log('Error (Repository.Update): No se encontro ningun elemento con el id especificado.');
                return false;
            }

            const newbdJSON = JSON.stringify(bdArray, null, 2)


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
        catch(err) {
            console.log('Error (Repository.Update):',err)
            return false
        }
    }
}

module.exports = repository



