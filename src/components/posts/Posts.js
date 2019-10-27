import React from 'react'
import Link from '../Link'
import Image from '../Image'
import { Box, Heading, Grid, Stack, ResponsiveContext } from 'grommet'

const Post = ({ post, size }) => (
  <Link to={post.path}>
    <Box margin={{ left: 'xsmall', right: 'xsmall' }} height='small' style={{ minHeight: '200px', minWidth: '300px' }} data-testid={`${post.title}.category`}>
      <Stack fill>
        <Box background={!post.image && 'dark-1'} fill>{post.image && <Image gatsbyImage={post.image.childImageSharp} />}</Box>
        <Box fill justify='end'>
          <Box fill='horizontal' align='center' justify='center' background={{ color: 'black', opacity: 'medium' }}><Heading color='light-1' level={3}>{post.title}</Heading></Box>
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
