import React from 'react'
import { Box, Heading } from 'grommet'

export default ({ category }) => {
  return (
    <Box fill align='center' pad='medium'>
      <Box align='center' justify='center' fill='horizontal'><Heading level={1}>{category.title}</Heading></Box>
    </Box>
  )
}
