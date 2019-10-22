import React from 'react'
import Link from '../Link'

import { Box, Heading, Grid, Stack, ResponsiveContext } from 'grommet'

const Post = ({ post, size }) => (
  <Link to={post.path}>
    <Box margin='xsmall' flex height='small' style={{ minHeight: '200px', minWidth: '300px' }} data-testid={`${post.title}.category`}>
      <Stack fill>
        <Box fill background='dark-1' />
        <Box fill justify='end'>
          <Box fill='horizontal' align='center' justify='center' background={{ color: 'black', opacity: 'medium' }}><Heading level={3}>{post.title}</Heading></Box>
        </Box>
      </Stack>
    </Box>
  </Link>
)

const Posts = ({ posts = [] }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grid
      data-testid='posts'
      align='start'
      columns={size !== 'small' && { count: 'fill', size: 'medium' }}
      gap='xsmall'
    >
      {posts.map((post, index) => (
        <Post
          key={post.title}
          post={post}
          size={size}
        />
      ))}
    </Grid>
  )
}

export default Posts
