import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Placeholder from '../Placeholder'
import CategoryHeader from '../CategoryHeader'

export default ({ events }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  return (
    <Box flex>
      <CategoryHeader heading='Категория' search='Поиск по категории' />
      <Box flex direction={isSmall ? 'column' : 'row'}>
        <Box flex align='center' justify='center'><Placeholder text='Результаты поиска' height='xsmall' width='small' fill={false} /></Box>
        <Box flex align='center' justify='center'><Placeholder text='Карта' height='xsmall' width='small' fill={false} /></Box>
      </Box>
    </Box>
  )
}
