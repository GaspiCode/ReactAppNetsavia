export const stringFieldValidator = (str) => {
    if (str === '') {
        //console.log('Error (fieldValidator(stringValidator)): str fue null')
        return 0
    }
    if (str.length >= 40) {
        //console.log('Error (fieldValidator(stringValidator)): str es muy largo')
        return 1
    }
    if (!isNaN(str)) {
        //console.log('Error (fieldValidator(stringValidator)): str es un numero')
        //Cuestion que si vivis en una ciudad que se llame kilometro 8...
        return 2
    }
    return true
}

export const numberFieldValidator = (num) => {
    if (num === '') {
        //console.log('Error (fieldValidator(numberValidator)): num fue null')
        return 0
    }
    if (isNaN(num)) {
        //console.log('Error (fieldValidator(numberValidator)): num no es un numero')
        return 1
    }
    if (num < 0) {
        //console.log('Error (fieldValidator(numberValidator)): num es negativo')
        return 2
    }
    if (num > 120) {
        //console.log('Error (fieldValidator(numberValidator)): num es muy alto')
        return 3
    }
    return true
}
