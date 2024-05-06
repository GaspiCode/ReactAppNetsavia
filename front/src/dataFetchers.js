export const addDataFetcher = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch('/data', options);

    if (!response.ok) {
      console.error('Error (addDataFetcher): Respuesta inesperada');
      return 
    }

  } catch (error) {
    console.error('Error (addDataFetcher):', error);
  }
}

export const displayDataFetcher = async () => {
  
  try {
    const response = await fetch('/Data')

    if (!response.ok) {
      console.error('Error (displayDataFetcher): Respuesta inesperada');
      return
    }

    const jsonData = await response.json()
    return jsonData
  
  } catch (err) {
    console.error('Error (displayDataFetcher): Error en la solicitud',err)
  }
}

export const displayDataFetcher_Debug = async () => {

  const datos = []

  const data = {
    id: 1,
    nombre: "Mateo",
    edad: 32,
    ciudad: "Barcelona"
  }
  datos.push(data)

  const data2 = {
    id: 2,
    nombre: "Gaspar",
    edad: 22,
    ciudad: "buenos aires"
  }
  datos.push(data2)

  const data3 = {
    id: 3,
    nombre: "Pablo",
    edad: 24,
    ciudad: "entre rios"
  }
  datos.push(data3)
  try {
    const jsonData = datos
    return jsonData
  
  } catch (err) {
    console.error('Error (displayDataFetcher_Debug): Error en la solicitud',err)
  }
}