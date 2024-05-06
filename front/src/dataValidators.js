import * as fieldValidators from './fieldValidators'

export const addValidator = () => {
    const nameField = document.querySelector('.addInfo #nombre')
    const cityField = document.querySelector('.addInfo #ciudad')
    const ageField = document.querySelector('.addInfo #edad')

    if (!nameField || !cityField || !ageField) {
      console.error('Error (validate_Add): nameField, cityField o ageField fue null')
      return
    }
    const name = nameField.value.trim()
    const city = cityField.value.trim()
    const age = ageField.value.trim()

    if (!fieldValidators.stringFieldValidator(name) ||
      !fieldValidators.stringFieldValidator(city) ||
      !fieldValidators.numberFieldValidator(age)) {
      alert('Uno o mas campos estan vacios, pista: Edad tiene que ser un numero')
      return false
    }
    const data = {
      id: null,
      nombre: name,
      edad: age,
      ciudad: city
    }
    return data
  }