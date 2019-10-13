import React from 'react'
import { Box, Text, Menu, ResponsiveContext } from 'grommet'
import { Language } from 'grommet-icons'

import Link from './Link'

const Nav = () => {
  return (
    <Box fill='horizontal' direction='row' gap='xsmall' align='center' justify='center'>
      <Box border={{ side: 'right', color: 'control' }} justify='center' align='center' basis='1/3'><Link to='/today'><Text>today</Text></Link></Box>
      <Box border={{ side: 'right', color: 'control' }} justify='center' align='center' basis='1/3'><Link to='/news'><Text>news</Text></Link></Box>
      <Box border={{ side: 'right', color: 'control' }} justify='center' align='center' basis='1/3'><Link to='/events'><Text>events</Text></Link></Box>
      <Box justify='center' align='center' basis='1/3'><Link to='/guide'><Text>guide</Text></Link></Box>
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
          <Link to='/'><Text>mayapur.live</Text></Link>
        </Box>
        {!isSmall && <Nav />}
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
      {isSmall && <Nav />}
    </Box>
  )
}
export default Header
