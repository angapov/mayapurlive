import React from 'react'
import { Box, Text, Menu, ResponsiveContext, Button } from 'grommet'
import { Language, MapLocation, Alarm, Announce, Schedule } from 'grommet-icons'

import { injectIntl, changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl'

import Link from './Link'

const Nav = ({ isSmall, intl }) => {
  const size = isSmall ? 'small' : 'medium'
  const nav = [
    { border: true, url: '/guide', intlId: 'nav_guide', icon: <MapLocation size={size} color='control' /> },
    { border: true, url: '/today', intlId: 'nav_today', icon: <Alarm size={size} color='control' /> },
    { border: true, url: '/news', intlId: 'nav_news', icon: <Announce size={size} color='control' /> },
    { border: false, url: '/events', intlId: 'nav_events', icon: <Schedule size={size} color='control' /> }
  ]
  return (
    <Box fill='horizontal' direction='row' gap='xsmall' align='center' justify='center'>
      {nav.map(item => (
        <Box key={item.id} border={item.border && { side: 'right', color: 'control' }} justify='center' align='center' basis={`1/${nav.length}`}>
          <Link to={item.url}>
            <Button reverse plain label={<Text size={size}>{intl.formatMessage({ id: item.intlId })}</Text>} icon={item.icon} />
          </Link>
        </Box>
      ))}
    </Box>
  )
}

const Header = ({ intl }) => {
  const screen = React.useContext(ResponsiveContext)
  const { languages } = React.useContext(IntlContextConsumer)
  const isSmall = screen === 'small'
  console.log('intl', languages)
  return (
    <Box fill='horizontal' direction={isSmall ? 'column' : 'row'}>
      <Box background='black' fill='horizontal' direction='row' gap='xsmall' align='center' justify='between'>
        <Box justify='start' align='center' direction='row' pad='xsmall'>
          <Link to='/'><Text>mayapur.live</Text></Link>🌴
        </Box>
        {!isSmall && <Nav intl={intl} isSmall={isSmall} />}
        <Box justify='end' align='center' direction='row' gap='xsmall'>
          <Menu
            dropProps={{ align: { top: 'bottom', left: 'left' } }}
            icon={<Language color='control' />}
            label={intl.locale.toUpperCase()}
            items={languages.filter(language => language !== intl.locale).map(language => ({ label: language.toUpperCase(), onClick: () => changeLocale(language) }))}
          />
        </Box>
      </Box>
      {isSmall && <Nav intl={intl} isSmall={isSmall} />}
    </Box>
  )
}
export default injectIntl(Header)
