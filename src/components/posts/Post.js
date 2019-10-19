import React from 'react'
import { Box, Heading } from 'grommet'
import { renderAst } from '../../lib'

export default ({ post }) => {
  return (
    <Box fill align='center' pad='medium'>
      <Box align='center' justify='center' fill='horizontal'><Heading level={1}>{post.title}</Heading></Box>
      {/* <Box align='start' fill='vertical' width={{ min: 'small', max: 'large' }} dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <Box align='start' fill='vertical' width={{ min: 'small', max: 'large' }}>{renderAst(post.htmlAst)}</Box>
    </Box>
  )
}
