export const addViewDataResetter = () => {
    const nameField = document.querySelector('.addInfo #nombre')
    const cityField = document.querySelector('.addInfo #ciudad')
    const ageField = document.querySelector('.addInfo #edad')

    nameField.value = ''
    cityField.value = ''
    ageField.value = ''
  }

  export const editViewDataSetter = (data) => {
    const nameField = document.querySelector('.editInfo #nombre')
    const cityField = document.querySelector('.editInfo #ciudad')
    const ageField = document.querySelector('.editInfo #edad')

    nameField.value = data.nombre
    cityField.value = data.ciudad
    ageField.value = data.edad
  }
  export const editViewDataResetter = () => {
    const nameField = document.querySelector('.editInfo #nombre')
    const cityField = document.querySelector('.editInfo #ciudad')
    const ageField = document.querySelector('.editInfo #edad')

    nameField.value = ''
    cityField.value = ''
    ageField.value = ''
  }

