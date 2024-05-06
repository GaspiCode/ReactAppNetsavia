export const addDataHandler = async (data) => {
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
        console.error('Error (dataHandler_Addd): error al enviar la solicitud');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }