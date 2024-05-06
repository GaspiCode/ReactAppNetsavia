export const addReseter = () => {
    const nameField = document.querySelector('.addInfo #nombre')
    const cityField = document.querySelector('.addInfo #ciudad')
    const ageField = document.querySelector('.addInfo #edad')

    nameField.value = ''
    cityField.value = ''
    ageField.value = ''
  }

