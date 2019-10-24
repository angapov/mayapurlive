import React from 'react'
import { Box, Stack, Text, ResponsiveContext, TextInput, Form, FormField, Button } from 'grommet'
import { Search as SearchIcon } from 'grommet-icons'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../Image'
import Link from '../Link'
import intl from '../../intl'

const Search = ({ onSubmit, lang = 'en' }) => (
  <Box align='center' justify='center' fill='horizontal' direction='row' gap='xsmall' background={{ color: 'black', opacity: 'medium' }}>
    <Form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Box direction='row' fill gap='small' background={{ dark: true }}>
        <FormField name='search' style={{ width: '100%' }}>
          <TextInput data-testid='search.input' placeholder={intl.searchPlaceholder[lang]} onChange={event => onSubmit({ value: { search: event.target.value } })} />
        </FormField>
        <Button size='small' type='submit' icon={<SearchIcon color='control' />} />
      </Box>
    </Form>
  </Box>
)

const Quote = ({ lang = 'en', prabhupadImage }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Box data-testid='quote' gap='small' pad='xsmall' background={{ color: 'black', opacity: 'medium' }} align='center' justify='center' direction={size === 'small' ? 'column' : 'row'}>
      <Box align='center' justify='center'><Text size={size} color='light-1' textAlign='center' weight='bold'><em>"{intl.home_quote[lang]}"</em></Text></Box>
      <Box direction='row' gap='xsmall'>
        <Box round='xlarge' height='xxsmall' width='xxsmall'>
          <Link to='/srila-prabhupada'><Image gatsbyImage={prabhupadImage.childImageSharp} /></Link>
        </Box>
        <Box>
          <Link to='/srila-prabhupada'>{intl.home_prabhupada[lang]}</Link>
          <Text color='light-1' size='small'>{intl.home_prabhupadaStatus[lang]}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const Top = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "tovp-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prabhupadImage: file(relativePath: { eq: "prabhupada.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Box fill>
      <Stack fill>
        <Box fill height={{ max: 'medium' }}>
          <Image gatsbyImage={data.bannerImage.childImageSharp} />
        </Box>
        <Box fill justify='between'>
          <Box background={{ color: 'dark-1', opacity: 'medium' }}><Quote prabhupadImage={data.prabhupadImage} /></Box>
          <Search onSubmit={value => console.log(value)} />
        </Box>
      </Stack>
    </Box>
  )
}

export default Top
