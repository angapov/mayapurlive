import React from 'react'
import { Box, Anchor, ResponsiveContext, Text } from 'grommet'
import { Facebook, Instagram, Mail, Favorite } from 'grommet-icons'

const Footer = () => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const size = 'medium'
  return (
    <Box as='footer' fill='horizontal' direction={isSmall ? 'column' : 'row'} align='center' justify='center' background='black' pad='small' gap='small'>
      <Box fill='horizontal' direction='row' align='center' justify='center' background='black'>
        <Box align='center' justify='center' basis='1/3'>
          <Anchor href='mailto:haribol@mayapur.live' target='_blank'><Box align='center' justify='center'><Mail size={size} color='control' /></Box></Anchor>
        </Box>
        <Box align='center' justify='center' basis='1/3'>
          <Anchor href='https://facebook.com/mayapur.live' target='_blank'><Box align='center' justify='center'><Facebook size={size} color='control' /></Box></Anchor>
        </Box>
        <Box align='center' justify='center' basis='1/3'>
          <Anchor href='https://instagram.com/mayapur.live' target='_blank'><Box align='center' justify='center'><Instagram size={size} color='control' /></Box></Anchor>
        </Box>
      </Box>
      <Box fill='horizontal' direction='row' gap='xsmall' align='center' justify='center'>
        <Text size={size}>Made with <Favorite size='small' color='red' /> by <Anchor href='https://108.systems' target='_blank'>108.systems</Anchor></Text>
      </Box>
    </Box>
  )
}

export default Footer
