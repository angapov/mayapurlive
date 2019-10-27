import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import GoogleCalendar from '../GoogleCalendar'
import { useLocale } from '../../lib'

const googleCalendar = 'information.department.rc@gmail.com' // FIXME: remove hardcode

export default ({ events }) => {
  const locale = useLocale()
  const size = React.useContext(ResponsiveContext)
  const mode = size === 'small' ? 'agenda' : 'month'
  return (
    <Box flex>
      <GoogleCalendar
        // src='MnVubmc1YmN2dmlzMmMwbzFtbGNibGsyc29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
        src={googleCalendar}
        mode={mode}
        showNav
        showTabs
        lang={locale}
      />
    </Box>
  )
}
