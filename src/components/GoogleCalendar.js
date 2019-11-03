import React from 'react'

const boolToZeroOne = bool => bool ? '1' : '0'

export default ({ src, mode = 'month', showTitle = false, showPrint = false, showCalendars = false, showNav = false, showTabs = false, lang = 'en' }) => {
  const baseUrl = 'https://calendar.google.com/calendar/embed'
  const options = { src, mode, showTitle, showPrint, showCalendars, showNav, showTabs, hl: lang }
  const params = Object.keys(options).map(key => ([key, typeof options[key] === 'boolean' ? boolToZeroOne(options[key]) : options[key]]))
  const paramString = new URLSearchParams(params)
  const url = `${baseUrl}?${paramString}`
  return (
    <iframe
      title='Google Calendar'
      src={url}
      style={{ borderWidth: 0, height: '100%', width: '100%', flex: '1 1 auto' }}
      frameBorder='0'
      scrolling='no'
    />
  )
}
