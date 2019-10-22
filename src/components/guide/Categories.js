import React from 'react'
import Link from '../Link'

import { Box, Heading, Grid, Stack, ResponsiveContext } from 'grommet'

const Category = ({ category, size }) => (
  <Link to={category.path}>
    <Box margin='xsmall' flex height='small' style={{ minHeight: '200px', minWidth: '300px', width: '1fr' }} data-testid={`${category.title}.category`}>
      <Stack fill>
        <Box fill background='dark-1' />
        <Box fill justify='end'>
          <Box fill='horizontal' align='center' justify='center' background={{ color: 'black', opacity: 'medium' }}><Heading level={3}>{category.title}</Heading></Box>
        </Box>
      </Stack>
    </Box>
  </Link>
)

const Categories = ({ categories = [] }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Grid
      data-testid='categories'
      align='start'
      columns={size !== 'small' && { count: 'fill', size: 'medium' }}
      gap='xsmall'
    >
      {categories.map((category, index) => (
        <Category
          key={category.title}
          category={category}
          size={size}
        />
      ))}
    </Grid>
  )
}

export default Categories
