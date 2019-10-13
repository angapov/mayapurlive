import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Placeholder from '../Placeholder'
import CategoryHeader from '../CategoryHeader'
import Categories from './Categories'

const Home = ({ categories }) => {
  const screen = React.useContext(ResponsiveContext)
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
