export const addViewHandler = () => {
    const add = document.querySelector('.addContainer')
    const container = document.querySelector('.container')
    if (add && container) {
        container.style.transform = 'translate(0, 0)'
        add.style.transform = 'translate(-500%, -50%)'
    }
    else {
        console.log('Error (Add): add o container fue null')
    }
}

export const confirmViewHandler = () => {
    const confirm = document.querySelector('.confirmContainer')
    const container = document.querySelector('.container')
    if (confirm && container) {
        container.style.transform = 'translate(0, 0)'
        confirm.style.transform = 'translate(-50%, -800%)'
    }
    else {
        console.log('Error (Confirm): confirm o container fue null')
    }
}

export const editViewHandler = () => {
    const edit = document.querySelector('.editContainer')
    const container = document.querySelector('.container')
    if (edit && container) {
        container.style.transform = 'translate(0, 0)'
        edit.style.transform = 'translate(500%, -50%)'
    }
    else {
        console.log('Error (Add): add o container fue null')
    }
}

export const plusButtonViewHandler = () => {
    const add = document.querySelector('.addContainer')
    const container = document.querySelector('.container')
    if (add && container) {
        container.style.transform = 'translate(500%, 0)'
        add.style.transform = 'translate(-50%, -50%)'
    }
    else {
        console.log('Error (PlusButton): add o container fue null')
    }

}


export const cardEditViewHandler = () => {
    const edit = document.querySelector('.editContainer')
    const container = document.querySelector('.container')
    if (edit && container) {
        container.style.transform = 'translate(-500%, 0)'
        edit.style.transform = 'translate(-50%, -50%)'
    }
    else {
        console.log('Error (PlusButton): edit o container fue null')
    }

}

export const cardDeleteViewHandler = () => {
    const confirm = document.querySelector('.confirmContainer')
    const container = document.querySelector('.container')
    if (confirm && container) {
        container.style.transform = 'translate(0, 500%)'
        confirm.style.transform = 'translate(-50%, -50%)'
    }
    else {
        console.log('Error (PlusButton): confirm o container fue null')
    }

}


