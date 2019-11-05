import React from 'react'
import { Box } from 'grommet'

import Link from '../Link'

export default ({ tags }) => {
  return (
    <Box fill='horizontal' align='center' justify='center' direction='row' gap='small' wrap overflow={{ horizontal: 'scroll' }}>
      {tags.map(tag => (
        <Link key={tag.value} to={tag.path}>
          <Box fill align='center' justify='center'>
            {tag.value}
          </Box>
        </Link>
      ))}
    </Box>
  )
}
