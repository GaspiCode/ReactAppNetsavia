import * as fieldValidators from './fieldValidators'


export const addDataRetrieverAndValidator = () => {
  const nameField = document.querySelector('.addInfo #nombre')
  const cityField = document.querySelector('.addInfo #ciudad')
  const ageField = document.querySelector('.addInfo #edad')

  if (!nameField || !cityField || !ageField) {
    console.error('Error (addDataRetrieverAndValidator): nameField, cityField o ageField fue null')
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
    nombre: name,
    edad: age,
    ciudad: city
  }
  return data
}

export const editDataRetrieverAndValidator = () => {
  const nameField = document.querySelector('.editInfo #nombre')
  const cityField = document.querySelector('.editInfo #ciudad')
  const ageField = document.querySelector('.editInfo #edad')

  if (!nameField || !cityField || !ageField) {
    console.error('Error (editDataRetrieverAndValidator): nameField, cityField o ageField fue null')
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
    nombre: name,
    edad: age,
    ciudad: city
  }
  return data
}