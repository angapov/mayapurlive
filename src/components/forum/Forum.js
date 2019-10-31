import React from 'react'
import { Box } from 'grommet'
import { FacebookProvider, Group } from 'react-facebook'
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

const _Forum = () => {
  // const group = 'Mayapur-Forum'
  // const group = 'nodesws'
  // const src = `https://groups.google.com/forum/embed/?place=forum/${group}&showsearch=true&showpopout=true&showtabs=false&parenturl=${encodeURIComponent(window.location.href)}`
  // const src = `https://groups.google.com/forum/embed/?parenturl=http://localhost:8000#!forum/${group}`
  return (
    <Box flex>
      <SizeMe monitorHeight>
        {({ size }) => {
          return (
            <Box flex>
              <iframe
                sandbox='allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox'
                // src={src}
                src='https://groups.google.com/forum/embed/?place=forum/k8omsowosso#!forum/k8omsowosso'
                scrolling='no'
                frameBorder='0'
                height={size.height}
                width={size.width}
              />
            </Box>
          )
        }}
      </SizeMe>
    </Box>
  )
}

export default Forum
