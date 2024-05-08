export const sendDisplayReloadEvent = () => {
    const resetEvent = new CustomEvent('resetEvent')
    const display = document.querySelector('.displayer')
    if (!display) {
        console.error('Error (displayReloadEvent): display fue null')
        return
    }
    display.dispatchEvent(resetEvent)
}

export const sendIdEvent = (_id) => {
    const sendIdEvent = new CustomEvent('sendIdEvent', {
        detail: { _id: _id }
    })
    const confirm = document.querySelector('.confirmContainer')
    if (!confirm) {
        console.error('Error (sendIdEvent): confirm fue null')
        return
    }
    confirm.dispatchEvent(sendIdEvent)
}

export const sendDataEditEvent = (data) => {
    const sendDataEditEvent = new CustomEvent('sendDataEditEvent', {
        detail: {
            nombre: data.nombre,
            edad: data.edad,
            ciudad: data.ciudad,
            _id: data._id
        }
    })
    const edit = document.querySelector('.editContainer')
    if(!edit){
        console.error('Error (sendDataEditEvent): edit fue null')
    }
    edit.dispatchEvent(sendDataEditEvent)
}