import React from 'react'
import { Box } from 'grommet'

export default ({ events }) => {
  return (
    <Box fill>
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=MnVubmc1YmN2dmlzMmMwbzFtbGNibGsyc29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23C0CA33&amp;showTitle=0&amp;showPrint=0&amp;showNav=1&amp;showTabs=1&amp;showCalendars=1'
        style={{ borderWidth: 0, height: '100%', width: '100%' }}
        frameBorder='0'
        scrolling='no'
      />
    </Box>
  )
}
