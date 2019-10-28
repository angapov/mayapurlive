import React from 'react'
import { Box, Markdown } from 'grommet'
import { useLocale } from '../../lib'

const ru = `
  ### Поддержать проект

  **Mayapur Live** создается совместными усилиями:

  - [Руссккого департамента информации и коммуникации Маяпура](http://mayapuronline.ru)

  - студии разработки [108.systems](https://108.systems)

  - пожертвованиями и помощью преданных со всего мира


  Давайте вместе поможем Шриле Прабхупаде и Господу Чайтанье распространить славу Шри Маяпур Дхамы и Санкиртана Ягьи!

  #### Поддержать управление проектом и создание контента:

  - [Пожертвовать департаменту информации и коммуникации](http://mayapuronline.ru/category/donat/)
  - [Присоединиться к команде создания контента](mailto:haribol@mayapur.live)


  #### Поддержать разработку и поддержание сайта:

  - [Пожертвовать 108.systems](https://patreon.com/108systems)
  - [Присоединиться к команде разработки 108.systems](mailto:entrypoint@108.systems)
`
const en = `
  ### Support Project

  **Mayapur Live** is created due to combined efforts of

  - [Mayapur Russian Department of Information & Communication](http://mayapuronline.ru)

  - development studio [108.systems](https://108.systems)

  - kind contributions of devotees worldwide


  Lets help Srila Prabhupada and Lord Chaitanya to spread the glory of Sri Mayapur Dham and Sankirtana Yajna!

  #### Support Project Management & Content Creation:

  - [Donate to Department of Information & Communication](http://mayapuronline.ru/category/donat/)
  - [Join content creation team](mailto:haribol@mayapur.live)


  #### Support Site Development and Maintance:

  - [Donate to 108.systems](https://patreon.com/108systems)
  - [Join 108.systems development team](mailto:entrypoint@108.systems)
`

const content = { en, ru }

export default ({ team }) => {
  const locale = useLocale()
  return (
    <Box fill flex justify='center' align='center' pad='small'>
      <Markdown>{content[locale]}</Markdown>
    </Box>
  )
}
