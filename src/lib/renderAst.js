import React from 'react'
import RehypeReact from 'rehype-react'
import { Heading, Paragraph, Anchor, Image } from 'grommet'
import { Info } from 'grommet-icons'

const headers = [1, 2, 3, 4].reduce((obj, level) => {
  obj[`h${level}`] = ({ children, ...rest }) => <Heading {...rest} level={level}>{children}</Heading>
  return obj
}, {})

const p = ({ children, ...rest }) => <Paragraph {...rest} fill>{children}</Paragraph>

const tbd = ({ locale, url }) => {
  const label = locale === 'en'
    ? 'Post is being written. If you have some good videos, photos, ideas or feedback, you are welcome to help!'
    : 'Пост в процессе написания. Если у Вас есть хорошие видео, фотографии, идеи или обратная связь, Вы можете помочь!'
  return (
    <Anchor icon={<Info />} target='blank' href={url} label={label} />
  )
}

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    ...headers,
    p,
    a: Anchor,
    img: Image, // NOTE: need to check, maybe dont need this https://www.gatsbyjs.org/packages/gatsby-remark-images
    // NOTE: add table like in grommet Markdown? https://github.com/grommet/grommet/blob/master/src/js/components/Markdown/Markdown.js
    tbd
  }
}).Compiler

export default renderAst
