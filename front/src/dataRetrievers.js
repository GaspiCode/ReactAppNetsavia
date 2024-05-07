export const addDataRetriever = () => {
    const nombreField = document.querySelector('.addInfo #nombre')
    const ciudadField = document.querySelector('.addInfo #ciudad')
    const edadField = document.querySelector('.addInfo #edad')
  
    if (!nombreField || !ciudadField || !edadField) {
      console.error('Error (addDataRetriever): nameField, cityField o ageField fue null')
      return
    }

    const data = {
      nombre: nombreField.value.trim(),
      edad: edadField.value.trim(),
      ciudad:  ciudadField.value.trim()
    }
    return data
  }

  export const editDataRetriever = () => {
    const nombreField = document.querySelector('.editInfo #nombre')
    const ciudadField = document.querySelector('.editInfo #ciudad')
    const edadField = document.querySelector('.editInfo #edad')
  
    if (!nombreField || !ciudadField || !edadField) {
      console.error('Error (editDataRetriever): nameField, cityField o ageField fue null')
      return
    }

    const data = {
      nombre: nombreField.value.trim(),
      edad: edadField.value.trim(),
      ciudad: ciudadField.value.trim()
    }
    return data
  }