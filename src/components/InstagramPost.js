import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

export default ({ url }) => {
  return (
    <InstagramEmbed
      url={url}
      maxWidth={1200}
      hideCaption
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  )
}
