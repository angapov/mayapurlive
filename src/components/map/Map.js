import React from 'react'
import { Box, ResponsiveContext, Stack } from 'grommet'
import Posts from '../posts/Posts'
import Map from './MapContainer'

export default ({ posts }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const places = posts.filter(post => post.location)
  return (
    <Box flex>
      <Box fill='horizontal' align='center' justify='center' background='dark-2'>SEARCH</Box>
      <Box flex direction='row'>
        {!isSmall && <Box overflow='scroll' height={{ max: '100vh' }} pad={{ top: 'xsmall' }}><Posts posts={posts} /></Box>}
        <Box flex background='brand'><Map places={places} /></Box>
      </Box>
    </Box>
  )
}
