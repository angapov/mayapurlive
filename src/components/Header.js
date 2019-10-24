import React from 'react'
import { Box, Text, Menu, ResponsiveContext, Button } from 'grommet'
import { Language, MapLocation, Alarm, Announce, Schedule } from 'grommet-icons'

import Link from './Link'

import intl from '../intl'
import { useLocale, useLocation } from '../lib'

const Nav = ({ isSmall }) => {
  const locale = useLocale()
  // const size = isSmall ? 'small' : 'medium'
  const size = 'medium'
  const nav = [
    { border: true, url: '/guide', intlId: 'nav_guide', icon: <MapLocation size={size} color='control' /> },
    { border: true, url: '/today', intlId: 'nav_today', icon: <Alarm size={size} color='control' /> },
    { border: true, url: '/news', intlId: 'nav_news', icon: <Announce size={size} color='control' /> },
    { border: false, url: '/events', intlId: 'nav_events', icon: <Schedule size={size} color='control' /> }
  ]
  return (
    <Box fill='horizontal' direction='row' gap='xsmall' align='center' justify='center'>
      {nav.map(item => (
        <Box key={item.url} border={item.border && { side: 'right', color: 'control' }} justify='center' align='center' basis={`1/${nav.length}`} pad={isSmall && { top: 'small' }}>
          <Link to={item.url}>
            <Button reverse plain label={!isSmall && <Text size={size}>{intl[item.intlId][locale]}</Text>} icon={item.icon} />
          </Link>
        </Box>
      ))}
    </Box>
  )
}

const Header = () => {
  const screen = React.useContext(ResponsiveContext)
  const locale = useLocale()
  const { location, navigate } = useLocation()
  const languages = intl.locales
  const isSmall = screen === 'small'
  return (
    <Box fill='horizontal' direction={isSmall ? 'column' : 'row'}>
      <Box background='black' fill='horizontal' direction='row' gap='xsmall' align='center' justify='between'>
        <Box justify='start' align='center' direction='row' pad='xsmall'>
          <Link to='/'><Text>mayapur.live</Text></Link>🌴
        </Box>
        {!isSmall && <Nav isSmall={isSmall} locale={locale} />}
        <Box justify='end' align='center' direction='row' gap='xsmall'>
          <Menu
            dropProps={{ align: { top: 'bottom', left: 'left' } }}
            icon={<Language color='control' />}
            label={locale.toUpperCase()}
            items={languages.filter(language => language !== locale).map(language => {
              const path = location.pathname.split('/').filter(part => !languages.includes(part)).join('/')
              const href = `/${language}${path}`
              return { label: language.toUpperCase(), onClick: () => navigate(href) }
            }
            )}
          />
        </Box>
      </Box>
      {isSmall && <Nav isSmall={isSmall} locale={locale} />}
    </Box>
  )
}
export default Header
