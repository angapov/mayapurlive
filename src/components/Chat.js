import React from 'react'
import { CustomChat } from 'react-facebook'
// import MessengerCustomerChat from 'react-messenger-customer-chat'
import { useLocale } from '../lib'
import intl from '../intl'

const facebookPageId = '917238891940615'
// const facebookAppId = '610493882762259'

export default () => {
  const locale = useLocale()
  // const language = `${locale}_${locale.toUpperCase()}`
  return (
    <CustomChat
      pageId={facebookPageId}
      loggedInGreeting={intl.messenger_loggedInGreeting[locale]}
      loggedOutGreeting={intl.messenger_loggedOutGreeting[locale]}
      themeColor='#000000'
    />
  )
}

/*
<MessengerCustomerChat
  appId={facebookAppId}
  pageId={facebookPageId}
  language={language}
  loggedInGreeting={intl.messenger_loggedInGreeting[locale]}
  loggedOutGreeting={intl.messenger_loggedOutGreeting[locale]}
  version='3.3'
  themeColor='#000000'
/>
*/
