import React from 'react'
import { Box, Heading } from 'grommet'
import { renderAst } from '../../lib'
import Image from '../Image'

export default ({ post }) => {
  return (
    <Box fill align='center' pad='medium'>
      <Box align='center' justify='center' fill='horizontal'><Heading level={2}>{post.title}</Heading></Box>
      <Box width={{ max: 'large' }} background={!post.image && 'dark-1'} fill>{post.image && <Image gatsbyImage={post.image.childImageSharp} />}</Box>
      <Box align='start' fill='vertical' width={{ min: 'small', max: 'large' }}>{renderAst(post.htmlAst)}</Box>
    </Box>
  )
}
