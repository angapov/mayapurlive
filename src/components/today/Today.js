import React from 'react'
import { Box } from 'grommet'
import GoogleCalendar from '../GoogleCalendar'
import { useLocale } from '../../lib'

export default ({ today }) => {
  const locale = useLocale()
  return (
    <Box flex fill align='center' justify='center'>
      <GoogleCalendar
        src='MnVubmc1YmN2dmlzMmMwbzFtbGNibGsyc29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
        mode='agenda'
        showTitle={false}
        lang={locale}
      />
    </Box>
  )
}
