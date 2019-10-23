import React from 'react'
import { Box } from 'grommet'
import Categories from './Categories'
import Top from './Top'

const Home = ({ categories }) => {
  return (
    <Box fill>
      <Box fill='horizontal'><Top /></Box>
      <Box pad='small'>
        <Categories categories={categories} />
      </Box>
    </Box>
  )
}

export default Home
