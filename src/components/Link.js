import React from 'react'
import { ThemeContext } from 'grommet'
// import { Link } from 'gatsby'
import { Link } from 'gatsby-plugin-intl'

export default ({ to, children }) => {
  const theme = React.useContext(ThemeContext)
  const color = theme.global.colors[theme.anchor.color][theme.dark ? 'dark' : 'light']
  const activeColor = theme.global.colors['neutral-2']
  return <Link style={{ ...theme.anchor, color }} activeStyle={{ color: activeColor }} to={to}>{children}</Link>
}
