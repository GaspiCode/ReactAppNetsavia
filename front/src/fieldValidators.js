export const stringFieldValidator = (str) => {
    if (str === '') {
        console.error('Error (fieldValidator(stringValidator)): str fue null')
        return false
    }
    return true
}

export const numberFieldValidator = (num) => {
    if (num === '') {
        console.error('Error (fieldValidator(numberValidator)): num fue null')
        return false
    }
    if (isNaN(num)) {
        console.error('Error (fieldValidator(numberValidator)): num no es un numero')
        return false
    }
    return true
}
