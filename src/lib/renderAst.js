import React from 'react'
import RehypeReact from 'rehype-react'
import { Heading, Paragraph, Anchor, Image } from 'grommet'

const headers = [1, 2, 3, 4].reduce((obj, level) => {
  obj[`h${level}`] = ({ children }) => <Heading level={level}>{children}</Heading>
  return obj
}, {})

const p = ({ children }) => <Paragraph fill>{children}</Paragraph>

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    ...headers,
    p,
    a: Anchor,
    img: Image // NOTE: need to check, maybe dont need this https://www.gatsbyjs.org/packages/gatsby-remark-images
    // NOTE: add table like in grommet Markdown? https://github.com/grommet/grommet/blob/master/src/js/components/Markdown/Markdown.js
  }
}).Compiler

export default renderAst
