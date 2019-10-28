import React from 'react'
import { Box, ResponsiveContext } from 'grommet'

import ResponsiveIframe from '../ResponsiveIframe'

export default ({ events }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const src = 'https://www.mayapur.tv/iframe/playerplus/index.php?stream=MayapurTV/MayapurTVHD'
  // return (
  //   <Box flex align='center' justify='center'>
  //     <iframe
  //       width='600px'
  //       height='400px'
  //       align='center'
  //       frameborder='no'
  //       scrolling='no'
  //       src='https://www.mayapur.tv/iframe/playerplus/index.php?stream=MayapurTV/MayapurTVHD'
  //       style={{ verticalAlign: 'center' }}
  //       allowfullscreen
  //     />
  //   </Box>
  // )
  return (
    <Box flex align='center' justify='center'>
      <Box width={isSmall ? '100%' : '89%'}><ResponsiveIframe src={src} /></Box>
    </Box>
  )
}
