import React from 'react'
import { Box } from 'grommet'

import { SizeMe } from 'react-sizeme'
import { FacebookProvider, Page } from 'react-facebook'

import { useLocale } from '../../lib'

const FacebookPagePlugin = ({ width, height, language = 'en_US' }) => (
  <FacebookProvider appId='610493882762259' wait={false} language={`${language}_${language.toUpperCase()}`}>
    <Page
      // href='https://www.facebook.com/mayapur.live'
      href='https://www.facebook.com/sri.dham.mayapur'
      tabs='timeline'
      adaptContainerWidth={false}
      smallHeader
      hideCover
      width={width}
      height={height}
    />
  </FacebookProvider>
)

const News = () => {
  const locale = useLocale()
  return (
    <Box fill flex pad='small' align='center' justify='center'>
      <SizeMe monitorHeight>
        {({ size }) => {
          console.log('size', size.width, size.height)
          return (
            <Box fill flex align='center' justify='start'>
              <FacebookPagePlugin width={size.width} height={size.height} language={locale} />
            </Box>
          )
        }}
      </SizeMe>
    </Box>
  )
}

export default News
