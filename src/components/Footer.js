import React from 'react'
import { Box, Anchor, Text } from 'grommet'
import { Facebook, Instagram, Mail, Favorite } from 'grommet-icons'
import { injectIntl } from 'gatsby-plugin-intl'
import Link from './Link'

const Footer = ({ intl }) => {
  const isSmall = false
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
        <Text size={size}><Favorite size='small' color='red' /> <Link to='/team'>{intl.formatMessage({ id: 'footer_project_team' })}</Link></Text>
      </Box>
    </Box>
  )
}

export default injectIntl(Footer)
