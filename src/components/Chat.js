import React from 'react'
import { CustomChat } from 'react-facebook'

const facebookPageId = '917238891940615'

export default () => {
  return (
    <CustomChat pageId={facebookPageId} themeColor='#000000' minimized />
  )
}
