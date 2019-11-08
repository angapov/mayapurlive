import React from 'react'
import { Box, Heading, Layer, ResponsiveContext, Button } from 'grommet'
import { Previous, LinkPrevious } from 'grommet-icons'
import { renderAst } from '../../lib'
import Tags from './Tags'
import Image from '../Image'
import Link from '../Link'

import Gallery from './Gallery'

export default ({ post }) => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const [open, setOpen] = React.useState(false)
  return (
    <Box fill align='center' pad='medium'>
      {open && (
        <Layer full={isSmall} onClickOutside={() => setOpen(false)}>
          {isSmall && <Box fill='horizontal' background={{ color: 'black', opacity: 'strong' }}><Button onClick={() => setOpen(false)} icon={<LinkPrevious color='control' />} /></Box>}
          <Box width={isSmall ? '100vw' : '90vw'} height={isSmall ? '100vh' : '90vh'} overflow='scroll'>
            <Gallery gallery={[post.image, ...(post.gallery || [])]} />
          </Box>
        </Layer>
      )}
      <Box align='center' justify='center' fill='horizontal' pad={{ bottom: 'small' }}>
        <Box fill='horizontal' direction='row' align='center' justify='center' gap='small'>
          <Link to={post.category.path}><Box fill align='center' justify='center'><Previous color='control' /></Box></Link>
          <Heading level={2}>{post.title}</Heading>
        </Box>
        <Tags tags={post.tags.map(tag => ({ value: tag, path: `/tags/${tag}` }))} />
      </Box>
      <Box onClick={() => setOpen(true)} width={{ max: 'large' }} background={!post.image && 'dark-1'} fill>{post.image && <Image gatsbyImage={post.image.childImageSharp} />}</Box>
      <Box align='start' fill='vertical' width={{ min: 'small', max: 'large' }}>{renderAst(post.htmlAst)}</Box>
    </Box>
  )
}
