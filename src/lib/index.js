import { useState, useEffect } from 'react'
import { globalHistory } from '@reach/router'

import intl from '../intl'

export const useLocation = () => {
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

export const useLocale = () => {
  const { location } = useLocation()
  console.log('location', location)
  const locale = location.pathname.split('/').filter(part => intl.locales.includes(part))[0] || intl.defaultLocale
  console.log('locale', locale)
  return locale
}
