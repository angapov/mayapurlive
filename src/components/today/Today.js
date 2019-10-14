import React from 'react'
import { Box } from 'grommet'
import TelegramPost from '../TelegramPost'

export default ({ today }) => {
  return (
    <Box flex fill align='center' justify='center'>
      <Box flex fill pad='small'><TelegramPost style={{ flex: '1 1 auto' }} channel='mayapurnews' scrolling postId={904} /></Box>
    </Box>
  )
}
