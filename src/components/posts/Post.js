import React from 'react'
import { Box, Heading } from 'grommet'
import { Previous } from 'grommet-icons'
import { renderAst } from '../../lib'
import Tags from './Tags'
import Image from '../Image'
import Link from '../Link'

export default ({ post }) => {
  return (
    <Box fill align='center' pad='medium'>
      <Box align='center' justify='center' fill='horizontal' pad={{ bottom: 'small' }}>
        <Box fill='horizontal' direction='row' align='center' justify='center' gap='small'>
          <Link to={post.category.path}><Box fill align='center' justify='center'><Previous color='control' /></Box></Link>
          <Heading level={2}>{post.title}</Heading>
        </Box>
        <Tags tags={post.tags.map(tag => ({ value: tag, path: `/tags/${tag}` }))} />
      </Box>
      <Box width={{ max: 'large' }} background={!post.image && 'dark-1'} fill>{post.image && <Image gatsbyImage={post.image.childImageSharp} />}</Box>
      <Box align='start' fill='vertical' width={{ min: 'small', max: 'large' }}>{renderAst(post.htmlAst)}</Box>
    </Box>
  )
}
