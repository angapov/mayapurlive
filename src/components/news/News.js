import React from 'react'
import { Box, Grid, ResponsiveContext, Stack, Layer, Button } from 'grommet'
import TelegramPost from '../TelegramPost'

export default ({ events }) => {
  const screen = React.useContext(ResponsiveContext)
  const [show, setShow] = React.useState()
  return (
    <Box fill pad='small'>
      <Grid full rows='small' columns={screen !== 'small' && { count: 'fill', size: 'medium' }} gap='small'>
        {[901, 900, 897, 896, 893, 892, 891, 890].map(id => (
          <Box key={id}>
            <Stack fill>
              <TelegramPost postId={id} />
              <Box fill style={{ cursor: 'pointer' }} background={{ opacity: 'medium' }} onClick={() => setShow(id)} />
            </Stack>
          </Box>
        ))}
      </Grid>
      {show && (
        <Layer
          full
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <Box fill pad='small' align='center' justify='center'>
            <TelegramPost postId={show} scrolling />
          </Box>
          <Box pad='small'><Button primary label='Close' onClick={() => setShow(false)} /></Box>
        </Layer>
      )}
    </Box>
  )
}
