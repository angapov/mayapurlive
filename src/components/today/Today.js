import React from 'react'
import { Box } from 'grommet'
import Placeholder from '../Placeholder'

export default ({ today }) => {
  return (
    <Box flex align='center' justify='center'>
      <Placeholder text='Расписание на день' height='xsmall' width='small' fill={false} />
    </Box>
  )
}
