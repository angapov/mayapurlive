import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import Placeholder from '../Placeholder'

export default ({ events }) => {
  const screen = React.useContext(ResponsiveContext)
  return (
    <Box flex>
      <Box height={screen !== 'small' ? 'medium' : 'small'}>
        <Placeholder text='Welcome to Sri Dham Mayapur!' />
        <Placeholder text='Глобальный поиск' fill='horizontal' background='dark-2' height='45px' />
      </Box>
      <Box flex align='center' justify='center'>
        <Placeholder text='Динамичный контент' height='xsmall' width='small' fill={false} />
      </Box>
    </Box>
  )
}
