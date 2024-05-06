export const displayReloader = () => {
    const resetEvent = new CustomEvent('resetEvent')

    const display = document.querySelector('.displayer')
    if (!display) {
        console.error('Error (Display): display fue null')
    }
    
    display.dispatchEvent(resetEvent)
}