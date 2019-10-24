import React from 'react'
import Img from 'gatsby-image'

export default ({ gatsbyImage, ...rest }) => {
  return (
    <Img {...gatsbyImage} {...rest} />
  )
}
