import { useState, useEffect } from 'react'
import { globalHistory } from '@reach/router'
import renderAst from './renderAst'

import intl from '../intl'

const useLocation = () => {
  const initialState = {
    location: globalHistory.location,
    navigate: globalHistory.navigate
  }
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const removeListener = globalHistory.listen(params => {
      const { location } = params
      const newState = { ...initialState, location }
      setState(newState)
    })
    return () => {
      removeListener()
    }
  }, [])
  return state
}

const useLocale = () => {
  const { location } = useLocation()
  const localeFromPath = location.pathname.split('/').filter(part => intl.locales.includes(part))[0]
  const locale = localeFromPath || intl.defaultLocale
  return locale
}

export { renderAst, useLocale, useLocation }