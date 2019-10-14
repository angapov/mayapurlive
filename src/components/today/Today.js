import React from 'react'
import { Box } from 'grommet'
import TelegramPost from '../TelegramPost'

export default ({ today }) => {
  return (
    <Box fill align='center' justify='center'>
      <Box fill pad='small'><TelegramPost channel='mayapurnews' scrolling postId={904} /></Box>
    </Box>
  )
}
