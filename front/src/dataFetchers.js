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
    console.error('Error (displayDataFetcher): Error en la solicitud', err)
  }
}

export const confirmDataFetcher = async (_id) => {
  const data = { "_id": _id }
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch('/data', options);

    if (!response.ok) {
      console.error('Error (confirmDataFetcher): Respuesta inesperada');
      return
    }

  } catch (error) {
    console.error('Error (confirmDataFetcher):', error);
  }
}

export const editDataFetcher = async (data) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch('/data', options);

    if (!response.ok) {
      console.error('Error (editDataFetcher): Respuesta inesperada');
      return
    }

  } catch (error) {
    console.error('Error (editDataFetcher):', error);
  }
}

