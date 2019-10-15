import React from 'react'
import { Box, Markdown } from 'grommet'

const content = `
  ### Support Project

  **Mayapur Live** is created due to combined efforts of

  - [Mayapur Russian Department of Information & Communication](http://mayapuronline.ru)

  - development studio [108.systems](https://108.systems)

  - kind contributions of devotees worldwide


  Lets help Srila Prabhupada and Lord Chaitanya to spread the glory of Sri Mayapur Dham and Sankirtana Yajna!

  #### Support Project Management & Content Creation:

  - [Donate to Department of Information & Communication](https://paypal.me/timpchelintsev)
  - [Join content creation team](mailto:join@mayapur.live)


  #### Support Site Development and Maintance:

  - [Donate to 108.systems](https://patreon.com/nodes)
  - [Join 108.systems development team](mailto:join@108.systems)
`
export default ({ team }) => {
  return (
    <Box fill flex justify='center' align='center' pad='small'>
      <Markdown>{content}</Markdown>
    </Box>
  )
}
