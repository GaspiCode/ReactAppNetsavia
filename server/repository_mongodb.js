const { MongoClient } = require('mongodb')

class Repository_MongoDb {

    cliente = new MongoClient('mongodb://localhost:27017')
    db = this.cliente.db('ReactAppNetsavia')
    coll = this.db.collection('Usuarios')

    Create = async (data) => {
        data.id = await this.assingId()
        try {
            await this.cliente.connect()

            await this.coll.insertOne(data)

            return true
        } catch (err) {
            console.error('Error (Repository_Mongodb.Create): ', err)
            return false
        }
        finally {
            await this.cliente.close()
        }
    }

    DeleteById = async (data) => {

        try {
            await this.cliente.connect()

            const result = await this.coll.deleteMany({ "id": data.id })

            if (result.deletedCount === 0) {
                console.error('Error (Repository_Mongodb.DeleteByID): No se ha encontrado un registro con la id proporcionada')
                return false
            }

            return true
        } catch (err) {
            console.error('Error (Repository_Mongodb.DeleteById): ', err)
            return false
        }
        finally {
            await this.cliente.close()
        }
    }

    ReadAll = async () => {
        try {
            await this.cliente.connect()
            const cursor = await this.coll.find()
            const resultado = await cursor.toArray()

            return resultado

        } catch (err) {
            console.error('Error (Repository_Mongodb.ReadAll): ', err)
        }
        finally {
            await this.cliente.close()
        }
    }

    ReadById = async (id) => {
        try {
            await this.cliente.connect()
            const resultado = await this.coll.findOne({ "id": id })

            if (resultado) {
                return resultado
            } else {
                console.error('Error (Repository_Mongodb.ReadById): resultado fue null')
            }


        } catch (err) {
            console.error('Error (Repository_Mongodb.ReadById): ', err)
        }
        finally {
            await this.cliente.close()
        }
    }

    Update = async (data) => {
        try {
            await this.cliente.connect()

            const result = await this.coll.updateOne({ "id": data.id }, { $set: data });

            if (result.matchedCount === 0) {
                console.error('Error (Repository_Mongodb.Update): no se encontro ningun elemento con la id proporcionada')
                return false
            }

            return true

        } catch (err) {
            console.error('Error (Repository_Mongodb.Update): ', err)
            return false
        }
        finally {
            await this.cliente.close()
        }


    }

    assingId = async () => {
        //Comentario: Hay tres formas de hacer esto

        //a) guardar toda la base de datos en un array, iterarlo y encontrar la menor id disponible
        //b) iterar un query findOne() buscando la menor id disponible
        //c) refactorizar todo el sistema para que utilize como id las proporcionadas por mongodb(ideal?)
        //d) esto lo estoy pensando on the fly, podria haber una solucion menos compleja que no este contemplando

        //problemas:

        //a) problema de escalamiento de la bd: si la bd es muy grande pueden ocurrir problemas de memoria al bajar el array, solucion no optima
        //b) problema de rendimiento al escalar: por cada registro que tenga en la bd tengo que hacer un query, si tengo n registros el
        //  rendimiento sera bajo xq voy a tener que hacer n querys, problemon, solucion no optima
        //c) realmente voy a refactorizar un sistema entero de una demo?, puede que sea la solucion ideal...nose como funcionaria el key del componente card,
        //  pero creo que no representaria un problema
        //d) es un potencial aun no definido, puede que realmente no exista otra solucion mas optima, aun asi creo que la solucion optima en terminos de 
        //  buen codigo y rendimiento es la c), pero aun asi voy a proseguir con la a), ya tengo el algoritmo desarrollado y no seria dificil adaptarlo

        const bdArray = await this.ReadAll()

        // Ordenar el array, tiene que estar ordenado para que el algoritmo de ids funcione
        bdArray.sort((a, b) => {
            return a.id - b.id
        })

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
            return id
        } else {
            return 0
        }
    }
}

module.exports = Repository_MongoDb
