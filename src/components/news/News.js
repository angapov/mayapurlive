import React from 'react'
import { Box, ResponsiveContext, Tabs, Tab } from 'grommet'

import { SizeMe } from 'react-sizeme'
import { Page, EmbeddedPost } from 'react-facebook'

import { useLocale } from '../../lib'

const FacebookPagePlugin = ({ width, height, page }) => (
  <Page
    href={`https://www.facebook.com/${page}`}
    tabs='timeline'
    adaptContainerWidth={false}
    // adaptContainerWidth
    smallHeader
    hideCover
    width={width}
    height={height}
  />
)

const FacebookPost = ({ width, url }) => (
  <Box width={width} background='white'><EmbeddedPost href={url} width={width} /></Box>
)
const FacebookPage = ({ size, align, page }) => {
  return (
    <Box height={{ min: '100vh' }} flex fill align={align} justify='start'>
      {size.width && size.height ? <FacebookPagePlugin page={page} width={size.width} height={size.height} /> : null}
    </Box>
  )
}

const NewsGrid = ({ isSmall }) => {
  const posts = ['1395321110645867', '1391436441034334', '1386876858156959']
  return (
    <Box flex fill align='center' justify='center'>
      {posts.map(postId => (
        <Box key={postId} justify='center' align='center' fill='horizontal'>
          <FacebookPost width='500px' url={`https://www.facebook.com/sri.dham.mayapur/posts/${postId}`} />
        </Box>
      ))}
    </Box>
  )
}

const News = () => {
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const locale = useLocale()
  return (
    <Box fill flex>
      <Tabs flex>
        <Tab title={locale === 'en' ? 'Feed' : 'Лента'}>
          <Box fill flex>
            <SizeMe monitorHeight>
              {({ size }) => {
                console.log('size', size.width, size.height)
                return (
                  <FacebookPage page='sri.dham.mayapur' size={size} align='center' />
                )
              }}
            </SizeMe>
          </Box>
        </Tab>
        <Tab title={locale === 'en' ? 'Pinned' : 'Закрепленные'}>
          <NewsGrid isSmall={isSmall} />
        </Tab>
      </Tabs>
    </Box>
  )
}

export default News
