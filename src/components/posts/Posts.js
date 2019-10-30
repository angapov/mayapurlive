import React from 'react'
import { Grid, ResponsiveContext } from 'grommet'

import PostPreview from './PostPreview'

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
        <PostPreview
          key={post.title}
          post={post}
          size={size}
        />
      ))}
    </Grid>
  )
}

export default Posts
