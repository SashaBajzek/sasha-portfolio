// Keyboard support for SVGs that act as buttons: Enter or Space runs the handler, like a native <button>.
const onActivateKey = handler => event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handler()
  }
}

export default onActivateKey
