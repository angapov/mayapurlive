import React from 'react'
import { Box, Heading } from 'grommet'
import { Previous, Map as MapIcon } from 'grommet-icons'
import Posts from './Posts'
import Tags from './Tags'
import Link from '../Link'

export default ({ category }) => {
  const tags = new Map()
  category.posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        tags.set(tag, { value: tag, path: `/tags/${tag}` })
      })
    }
  })
  return (
    <Box fill>
      <Box fill='horizontal' justify='center' align='center'>
        <Box align='center' justify='center' fill='horizontal' pad='small' background={{ color: 'black', opacity: 'medium' }}>
          <Box fill='horizontal' direction='row' align='center' justify='center' gap='small'>
            <Link to='/'><Box fill align='center' justify='center'><Previous color='control' /></Box></Link>
            <Heading color='light-1' level={2}>{category.title}</Heading>
            <Link to={`/map?category=${category.title.replace(' ', '+')}`}><Box fill align='center' justify='center'><MapIcon color='control' /></Box></Link>
          </Box>
          <Tags tags={[...tags.values()]} />
        </Box>
      </Box>
      <Box pad='small'>
        <Posts posts={category.posts} />
      </Box>
    </Box>
  )
}
