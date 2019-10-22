import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Categories from './Categories'
import Top from './Top'

const Home = ({ categories }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  return (
    <Box fill>
      {/* <Box fill='horizontal' height={isSmall ? 'small' : 'medium'}><Top /></Box> */}
      <Box fill='horizontal'><Top /></Box>
      <Box pad='small'>
        <Categories categories={categories} />
      </Box>
    </Box>
  )
}

export default Home
