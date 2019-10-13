import React from 'react'
import { Box } from 'grommet'

export default ({ text, children, ...rest }) => <Box background='dark-1' fill align='center' justify='center' {...rest}>{children || text}</Box>
