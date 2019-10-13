import React from 'react'
import { Box, Button } from 'grommet'
import { Chat } from 'grommet-icons'

export default () => {
  return (
    <Box round align='center' justify='center' background={{ color: 'black', opacity: 'strong' }} style={{ position: 'absolute', right: '20px', bottom: '20px', width: '50px', height: '50px' }}>
      <Button plain><Chat size='medium' /></Button>
    </Box>
  )
}
