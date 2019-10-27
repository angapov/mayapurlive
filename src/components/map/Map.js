import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Posts from '../posts/Posts'
import Map from './MapContainer'

// const Map = ({ initialPosts }) => {
//   const [posts, setPosts] = React.useState(initialPosts)
//   return (
//     <Box flex align='center' justify='center' background='dark-1'>MAP</Box>
//   )
// }

export default ({ posts }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  // posts = [{ title: 1, path: '/' }, { title: 2, path: '/' }, { title: 3, path: '/' }, { title: 4, path: '/' }, { title: 5, path: '/' }, { title: 6, path: '/' }]
  return (
    <Box flex>
      <Box fill='horizontal' align='center' justify='center' background='dark-2'>SEARCH</Box>
      <Box flex direction={isSmall ? 'column' : 'row'}>
        {!isSmall && <Box overflow='scroll' height={{ max: '100vh' }} pad={{ top: 'xsmall' }}><Posts posts={posts} /></Box>}
        <Box flex><Map places={posts} /></Box>
      </Box>
    </Box>
  )
}
