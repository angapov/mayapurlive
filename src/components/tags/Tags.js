import React from 'react'
import { Box, Grid } from 'grommet'

import Link from '../Link'

const Tag = ({ tag }) => {
  return (
    <Box>
      <Link to={tag.path}>{tag.value}</Link>
    </Box>
  )
}

export default ({ tags }) => {
  return (
    <Box flex>
      <Grid fill rows='small' columns='small'>
        {tags.map(tag => (
          <Tag key={tag.value} tag={tag} />
        ))}
      </Grid>
    </Box>
  )
}
