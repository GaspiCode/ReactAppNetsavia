export const stringFieldValidator = (str) => {
    if (str === '') {
        console.log('Error (fieldValidator(stringValidator)): str fue null')
        return false
    }
    return true
}

export const numberFieldValidator = (num) => {
    if (num === '') {
        console.log('Error (fieldValidator(numberValidator)): num fue null')
        return false
    }
    if (isNaN(num)) {
        console.log('Error (fieldValidator(numberValidator)): num no es un numero')
        return false
    }
    return true
}
