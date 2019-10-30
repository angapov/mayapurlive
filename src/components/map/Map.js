import React from 'react'
import { Box, ResponsiveContext, Select } from 'grommet'
import Posts from '../posts/Posts'
import Map from './MapContainer'

import { useLocation } from '../../lib'

const Filters = ({ categories, category }) => {
  const { location, navigate } = useLocation()
  return (
    <Box fill='horizontal' align='center' justify='center' direction='row'>
      <Box>
        <Select
          placeholder='Select category...'
          plain
          options={categories.map(category => category.title)}
          value={category}
          // labelKey={category => category.title}
          // valueLabel={value => <Text>{value.name}</Text>}
          // onChange={({ option }) => setState({ category: option, places: allPlaces.filter(place => place.category.title === option) })}
          onChange={({ option }) => navigate(`${location.pathname}?category=${option.replace(' ', '+')}`)}
        />
      </Box>
    </Box>
  )
}

export default ({ posts, categories }) => {
  const screen = React.useContext(ResponsiveContext)
  const { location } = useLocation()
  const queryParams = new URLSearchParams(location.search)
  console.log('location', location, queryParams.get('category'))
  const isSmall = screen === 'small'
  const allPlaces = posts.filter(post => post.location)
  const categoryTitle = queryParams.get('category')
  const places = categoryTitle ? allPlaces.filter(place => place.category.title === categoryTitle) : allPlaces
  return (
    <Box flex>
      <Filters categories={categories} category={categoryTitle} />
      <Box flex direction='row'>
        {!isSmall && <Box overflow='scroll' height={{ max: '100vh' }} pad={{ top: 'xsmall' }}><Posts posts={places} /></Box>}
        <Box flex background='brand'><Map places={places} /></Box>
      </Box>
    </Box>
  )
}
