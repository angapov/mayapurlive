import React from 'react'
import { Box, Button } from 'grommet'
import { Services } from 'grommet-icons'

import { useLocale } from '../lib'
import Placeholder from './Placeholder'
import intl from '../intl'

const InDevelopment = () => {
  const locale = useLocale()
  return (
    <Box fill flex pad='small' align='center' justify='center'>
      <Placeholder flex><Button primary icon={<Services />} label={intl.in_development[locale]} /></Placeholder>
    </Box>
  )
}

export default InDevelopment
