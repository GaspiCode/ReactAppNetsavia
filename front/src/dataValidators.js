import * as fieldValidators from './fieldValidators'

export const dataValidator = (input) => {
  const nombre = input.nombre
  const ciudad = input.ciudad
  const edad = input.edad

  if (fieldValidators.stringFieldValidator(nombre) === 0 ||
    fieldValidators.stringFieldValidator(ciudad) === 0 ||
    fieldValidators.numberFieldValidator(edad) === 0) {
    alert('Uno o mas campos estan vacios')
    return false
  }
  if (fieldValidators.stringFieldValidator(nombre) === 1 ||
    fieldValidators.stringFieldValidator(ciudad) === 1) {
    alert('El texto no debe ser mayor a 40 caracteres')
    return false
  }
  if (fieldValidators.numberFieldValidator(edad) === 1) {
    alert('Edad debe ser un numero')
    return false
  }
  if (fieldValidators.numberFieldValidator(edad) === 2) {
    alert('La edad no puede ser negativa')
    return false
  }
  if (fieldValidators.numberFieldValidator(edad) === 3) {
    alert('Tanto vas a vivir')
    return false
  }
  const output = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
  }
  return output
}
