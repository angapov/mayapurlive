import React from 'react'
import { Box, Stack, Heading } from 'grommet'
import Link from '../Link'
import Image from '../Image'

const PostPreview = ({ post }) => (
  <Link to={post.path}>
    {/* <Box margin={{ left: 'xsmall', right: 'xsmall' }} height='small' style={{ minHeight: '200px', minWidth: '300px' }} data-testid={`${post.title}.category`}> */}
    <Box height='small' style={{ minHeight: '200px', minWidth: '300px' }} data-testid={`${post.title}.category`}>
      <Stack fill>
        <Box background={!post.image && 'dark-1'} fill>{post.image && <Image gatsbyImage={post.image.childImageSharp} />}</Box>
        <Box fill justify='end'>
          <Box fill='horizontal' align='center' justify='center' background={{ color: 'black', opacity: 'medium' }}><Heading color='light-1' level={3}>{post.title}</Heading></Box>
        </Box>
      </Stack>
    </Box>
  </Link>
)

export default PostPreview
