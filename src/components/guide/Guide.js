import React from 'react'
import { Box } from 'grommet'
import CategoryHeader from '../CategoryHeader'
import Categories from './Categories'

const Home = ({ categories }) => {
  return (
    <Box fill>
      <CategoryHeader heading='Гид по Маяпуру' search='Поиск по гиду' />
      <Box pad='small'>
        <Categories categories={categories} />
      </Box>
    </Box>
  )
}

export default Home
