import React from 'react'
import { Box } from 'grommet'
import { FacebookProvider, Group, Comments } from 'react-facebook'
import { SizeMe } from 'react-sizeme'

import { useLocale } from '../../lib'

const FacebookGroupPlugin = ({ width, language = 'en_US' }) => (
  <FacebookProvider appId='610493882762259' wait={false} language={`${language}_${language.toUpperCase()}`}>
    <Group
      href='https://www.facebook.com/groups/mayapur.live'
      width={width}
      showSocialContext
      showMetaData
      skin='dark'
    />
  </FacebookProvider>
)

const Forum = () => {
  const locale = useLocale()
  return (
    <Box fill flex pad='small' align='center' justify='center'>
      <SizeMe monitorHeight={false}>
        {({ size }) => {
          console.log('size', size.width, size.height)
          return (
            <Box fill flex align='center' justify='center'>
              <FacebookGroupPlugin width={size.width} language={locale} />
            </Box>
          )
        }}
      </SizeMe>
    </Box>
  )
}

export default Forum
