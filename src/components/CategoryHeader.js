import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Placeholder from './Placeholder'

export default ({ heading, search }) => {
  const screen = React.useContext(ResponsiveContext)
  return (
    <Box height={screen !== 'small' ? 'small' : 'xsmall'}>
      <Placeholder text={heading} />
      <Placeholder text={search} fill='horizontal' background='dark-2' height='45px' />
    </Box>
  )
}
