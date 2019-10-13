import React from 'react'
import { Box } from 'grommet'
import Placeholder from '../Placeholder'
import CategoryHeader from '../CategoryHeader'

const Event = ({ event }) => {
  return (
    <Box fill='horizontal' height='xsmall'>
      <Placeholder text={event.name} />
    </Box>
  )
}

export default ({ events }) => {
  return (
    <Box flex>
      <CategoryHeader heading='Календарь событий' search='Поиск по событиям' />
      <Box flex align='center' justify='center' gap='small'>
        <Placeholder text='Календарь событий' height='xsmall' width='small' fill={false} />
        {/* {events.map(event => <Event key={event.id} event={event} />)} */}
      </Box>
    </Box>
  )
}
