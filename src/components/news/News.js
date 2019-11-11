import React from 'react'
import { Box } from 'grommet'

import { SizeMe } from 'react-sizeme'
import { FacebookProvider, Page } from 'react-facebook'

import { useLocale } from '../../lib'

const FacebookPagePlugin = ({ width, height, language = 'en' }) => (
  // <FacebookProvider appId='610493882762259' wait={false} language={`${language}_${language.toUpperCase()}`}>
  <Page
    href='https://www.facebook.com/sri.dham.mayapur'
    tabs='timeline'
    adaptContainerWidth={false}
    // adaptContainerWidth
    smallHeader
    hideCover
    width={width}
    height={height}
  />
  // </FacebookProvider>
)

const News = () => {
  const locale = useLocale()
  return (
    <Box fill flex pad='small' align='center' justify='center'>
      <SizeMe monitorHeight>
        {({ size }) => {
          console.log('size', size.width, size.height)
          return (
            <Box height={{ min: '100vh' }} fill flex align='center' justify='start'>
              {size.width && size.height ? <FacebookPagePlugin width={size.width} height={size.height} language={locale} /> : null}
            </Box>
          )
        }}
      </SizeMe>
    </Box>
  )
}

export default News
