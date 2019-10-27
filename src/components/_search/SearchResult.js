import React, { Component } from 'react'

import Link from 'next/link'
import { withRouter } from 'next/router'

import {
  Box,
  Heading,
  Text,
  Anchor
} from 'grommet'

import { SmartProgressiveImage, LoadingImagePlaceholder } from '../Image'

class SearchResult extends Component {
  render () {
    const { post = {}, router, ...rest } = this.props
    const postHref = { pathname: '/post', query: { ...router.query, postId: post.id } }
    return (
      <Box round='xxsmall' elevation='xsmall' overflow='hidden' {...rest}>
        <Box height='small' style={{ cursor: 'pointer' }}>
          <Link href={postHref}>
            <SmartProgressiveImage
              src={post.image_url}
              placeholderElement={<LoadingImagePlaceholder />}
              fit='cover' />
          </Link>
        </Box>
        <Box pad={{ horizontal: 'small' }}>
          <Box
            margin={{ top: 'small' }}
            direction='row'
            align='center'
            justify='between'
          >
            <Box>
              <Link href={postHref}><Anchor><Heading level={3} margin='none'>{post.title}</Heading></Anchor></Link>
              <Text color='dark-5' size='small'>
                {post.category.title}
              </Text>
            </Box>
          </Box>
          <Text
            size='small'
            color='dark-5'
            margin={{ vertical: 'small' }}
            truncate
          >
            {post.description}
          </Text>
        </Box>

      </Box>
    )
  }
}

export default withRouter(SearchResult)
