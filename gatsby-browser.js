/* global window, document */
const scrollTo = (id) => () => {
  const el = document.getElementById(id)
  if (el) return el.scrollIntoView()
  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash && hash.startsWith('#')) {
    hash = decodeURIComponent(hash.split('#')[1])
    console.log('hash', hash)
    window.setTimeout(scrollTo(hash), 10)
  }
}
