import React from 'react'
import { ThemeContext } from 'grommet'
import { Link } from 'gatsby'

import { useLocale } from '../lib'
import intl from '../intl'

export default ({ to, children }) => {
  const theme = React.useContext(ThemeContext)
  const locale = useLocale()
  to = intl.locales.includes(to.split('/')[0]) ? to : `/${locale}${to}`
  // console.log('locale in Link', locale, to)
  const color = theme.global.colors[theme.anchor.color][theme.dark ? 'dark' : 'light']
  const activeColor = theme.global.colors['neutral-2']
  return <Link style={{ ...theme.anchor, color }} activeStyle={{ color: activeColor }} to={to}>{children}</Link>
}
