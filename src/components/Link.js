import React from 'react'
import { ThemeContext } from 'grommet'
import { Link } from 'gatsby'

export default ({ to, children }) => {
  const theme = React.useContext(ThemeContext)
  const color = theme.global.colors[theme.anchor.color][theme.dark ? 'dark' : 'light']
  return <Link style={{ ...theme.anchor, color }} to={to}>{children}</Link>
}
