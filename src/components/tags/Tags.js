import React from 'react'
import { Box, Grid, Heading } from 'grommet'

import Link from '../Link'
import { useLocale } from '../../lib'
import intl from '../../intl'

const Tag = ({ tag }) => {
  return (
    <Link to={tag.path}>
      <Box fill align='center' justify='center' border={{ color: 'control' }}>
        {tag.value} ({tag.postsCount})
      </Box>
    </Link>
  )
}

export default ({ tags }) => {
  const locale = useLocale()
  return (
    <Box flex>
      <Box align='center' justify='center' fill='horizontal'><Heading level={2}>{`${intl.tags[locale]} (${tags.length})`}</Heading></Box>
      <Box flex pad='small'>
        <Grid fill rows='xsmall' columns='small' gap='small'>
          {tags.map(tag => (
            <Tag key={tag.value} tag={tag} />
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
