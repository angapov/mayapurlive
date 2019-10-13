import React from 'react'
import { Box } from 'grommet'
import Placeholder from '../Placeholder'
import CategoryHeader from '../CategoryHeader'

export default ({ events }) => {
  return (
    <Box flex>
      <CategoryHeader heading='Последние новости' search='Поиск по новостям' />
      <Box flex align='center' justify='center'>
        <Placeholder text='Последние новости' height='xsmall' width='small' fill={false} />
      </Box>
    </Box>
  )
}
