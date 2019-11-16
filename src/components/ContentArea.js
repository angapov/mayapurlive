import React from 'react'
import { Box, ResponsiveContext } from 'grommet'

const ContentArea = ({ children }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  console.log('screen from main', screen)
  return (
    <Box as='main' flex margin={{ top: isSmall ? '72px' : '48px' }}>
      {children}
    </Box>
  )
}

export default ContentArea
