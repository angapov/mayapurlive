import React from 'react'

export default ({ channel = 'mayapurnews', postId, style = {}, userpic = false, scrolling = false }) => {
  return (
    <iframe
      title={`${channel}-${postId}`}
      src={`https://t.me/${channel}/${postId}?embed=1&userpic=${userpic ? 'true' : 'false'}`}
      scrolling={scrolling ? 'yes' : 'no'}
      frameBorder='0'
      style={{ width: '100%', height: '100%', overflow: 'hidden', border: 'none', ...style }}
    />
  )
}
