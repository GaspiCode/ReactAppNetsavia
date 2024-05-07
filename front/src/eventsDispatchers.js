export const sendDisplayReloadEvent = () => {
    const resetEvent = new CustomEvent('resetEvent')

    const display = document.querySelector('.displayer')
    if (!display) {
        console.error('Error (displayReloadEvent): display fue null')
        return
    }
    
    display.dispatchEvent(resetEvent)
}

export const sendIdEvent = (id) => {
    const sendIdEvent = new CustomEvent('sendIdEvent',{
        detail: { id: id }
    })

    const confirm = document.querySelector('.confirmContainer')

    if(!confirm){
        console.error('Error (sendIdEvent): confirm fue null')
        return
    }

    confirm.dispatchEvent(sendIdEvent)
}