import React from 'react'
import { Box } from 'grommet'
import GoogleCalendar from '../GoogleCalendar'
import { useLocale } from '../../lib'

export default ({ events }) => {
  const locale = useLocale()
  return (
    <Box flex>
      <GoogleCalendar
        src='MnVubmc1YmN2dmlzMmMwbzFtbGNibGsyc29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
        mode='month'
        showNav
        showTabs
        lang={locale}
      />
    </Box>
  )
}
