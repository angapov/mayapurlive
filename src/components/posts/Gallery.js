import React from 'react'

import { Box, Carousel, Image as GrommetImage } from 'grommet'
import InstagramPost from '../InstagramPost'
import { EmbeddedVideo, EmbeddedPost } from 'react-facebook'

import Image from '../Image'

const getRendererFromSrc = src => {
  if (typeof src === 'object' && src.childImageSharp) {
    console.log(src.childImageSharp)
    return 'gatsbyImage'
  } else if (typeof src === 'string') {
    console.log('image', src)
    return 'image'
  }
}

const renderers = {
  dumb: ({ src }) => <Box fill background={src} />,
  image: ({ src }) => <GrommetImage src={src} />,
  // gatsbyImage: ({ src }) => <Box height='small' width='medium'><Image gatsbyImage={src.childImageSharp} /></Box>,
  gatsbyImage: ({ src }) => <Box onClick={() => console.log('CLICK')} justify='center' fill><Image gatsbyImage={src.childImageSharp} /></Box>,
  // gatsbyImage: ({ src }) => <Box height='small' width='small' background='black' />,
  facebookVideo: ({ src }) => <Box justify='center' align='center' fill><EmbeddedVideo href={src} /></Box>,
  facebookPost: ({ src }) => <Box justify='center' align='center' fill><EmbeddedPost href={src} /></Box>,
  instagram: ({ src }) => <InstagramPost />
}

export default ({ gallery = ['green', 'red', 'blue'] }) => {
  return (
    <Carousel fill>
      {gallery.map(src => {
        return (
          <Box key={src} fill align='center' justify='center'>
            {renderers[getRendererFromSrc(src)]({ src })}
          </Box>
        )
      })}
    </Carousel>
  )
}
