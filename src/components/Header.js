import React from 'react'
import { Box, Text, Menu, ResponsiveContext, Button } from 'grommet'
import { Language, MapLocation, Alarm, Announce, Schedule } from 'grommet-icons'

import Link from './Link'

const Nav = ({ isSmall }) => {
  const size = isSmall ? 'small' : 'medium'
  return (
    <Box fill='horizontal' direction='row' gap='xsmall' align='center' justify='center'>
      <Box border={{ side: 'right', color: 'control' }} justify='center' align='center' basis='1/3'><Link to='/guide'><Button reverse plain label='guide' icon={<MapLocation size={size} color='control' />} /></Link></Box>
      <Box border={{ side: 'right', color: 'control' }} justify='center' align='center' basis='1/3'><Link to='/today'><Button reverse plain label='today' icon={<Alarm size={size} color='control' />} /></Link></Box>
      <Box border={{ side: 'right', color: 'control' }} justify='center' align='center' basis='1/3'><Link to='/news'><Button reverse plain label='news' icon={<Announce size={size} color='control' />} /></Link></Box>
      <Box justify='center' align='center' basis='1/3'><Link to='/events'><Button reverse plain label='events' icon={<Schedule size={size} color='control' />} /></Link></Box>
    </Box>
  )
}

const Header = () => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  return (
    <Box fill='horizontal' direction={isSmall ? 'column' : 'row'}>
      <Box background='black' fill='horizontal' direction='row' gap='xsmall' align='center' justify='between'>
        <Box justify='start' align='center' direction='row' pad='xsmall'>
          <Link to='/'><Text>mayapur.live</Text></Link>🌴
        </Box>
        {!isSmall && <Nav isSmall={isSmall} />}
        <Box justify='end' align='center' direction='row' gap='xsmall'>
          <Menu
            dropProps={{ align: { top: 'bottom', left: 'left' } }}
            icon={<Language color='control' />}
            label='EN'
            items={[
              { label: 'EN', onClick: () => console.log('EN') },
              { label: 'RU', onClick: () => console.log(('RU')) }
            ]}
          />
        </Box>
      </Box>
      {isSmall && <Nav isSmall={isSmall} />}
    </Box>
  )
}
export default Header
